import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Clock, Shield, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface EndpointConfig {
  id: string;
  method: 'GET' | 'POST';
  path: string;
  name: string;
  description: string;
  requestBody?: object;
  responseHeaders: Record<string, string>;
  responseBody: object;
  defaultLatency: number;
}

const endpoints: EndpointConfig[] = [
  {
    id: 'health',
    method: 'GET',
    path: '/api/v1/health',
    name: 'System Health & Vitals',
    description: 'Returns real-time cluster health, database connection pool, and cache status.',
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'x-response-time': '12ms',
      'x-cluster-node': 'nbo-prod-01',
      'cache-control': 'no-cache, private',
    },
    defaultLatency: 12,
    responseBody: {
      status: 'UP',
      timestamp: '2026-09-15T14:23:45Z',
      services: {
        spring_boot_core: { status: 'HEALTHY', active_threads: 24 },
        django_rest_services: { status: 'HEALTHY', gunicorn_workers: 4 },
        mysql_cluster: { status: 'CONNECTED', pool_size: 45, max_connections: 100 },
        redis_cache: { status: 'CONNECTED', hit_rate: '96.4%' },
      },
      system: {
        memory_usage: '38.2%',
        uptime_seconds: 2419200,
        region: 'af-south-1 (Nairobi Node)',
      },
    },
  },
  {
    id: 'medicinachain',
    method: 'POST',
    path: '/api/v1/facilities/license/verify',
    name: 'MedicinaChain Module Decoupling',
    description: 'Decodes cryptographically signed facility license keys and dynamically returns active clinical modules.',
    requestBody: {
      facility_id: 'HOSP-NBO-0042',
      license_key: 'MC-eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...',
      node_ip: '197.232.84.12',
    },
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'x-response-time': '16ms',
      'x-tenant-id': 'tenant-hosp-nairobi-central',
      'x-framework': 'Spring-Boot/2.5.12-JVM',
    },
    defaultLatency: 16,
    responseBody: {
      status: 'LICENSE_VALID',
      facility_name: 'Nairobi Central Specialist Hospital',
      tenant_schema: 'tenant_hosp_0042',
      subscription_tier: 'ENTERPRISE_HMIS',
      active_modules: [
        'CLINICAL_PATIENTS',
        'PHARMACY_DISPENSARY',
        'BILLING_CASHIER',
        'LABORATORY_DIAGNOSTICS',
        'INPATIENT_WARD',
        'BIOMETRIC_AUTH'
      ],
      module_decoupling: {
        runtime_routes_configured: 18,
        sidebar_navigation: 'DYNAMIC_ENTERPRISE_TREE',
        branding_theme: 'CLINICAL_EMERALD'
      },
      node_status: 'PRODUCTION_ACTIVE',
    },
  },
  {
    id: 'mpesa',
    method: 'POST',
    path: '/api/v1/mpesa/c2b/simulate-ipn',
    name: 'M-Pesa IPN Reconciliation',
    description: 'Simulates a Safaricom Daraja C2B instant payment notification webhook with idempotency check.',
    requestBody: {
      TransactionType: 'Customer Buy Goods',
      TransID: 'SLM892JK34',
      TransTime: '20260915172312',
      TransAmount: 4850.0,
      BusinessShortCode: '600123',
      BillRefNumber: 'POULTRY-BATCH-09',
      MSISDN: '254707******',
      FirstName: 'Jared',
    },
    responseHeaders: {
      'content-type': 'application/json; charset=utf-8',
      'x-response-time': '42ms',
      'x-idempotency-key': 'd41d8cd98f00b204e9800998ecf8427e',
    },
    defaultLatency: 42,
    responseBody: {
      ResponseCode: '0',
      ResponseDesc: 'Success',
      ResultCode: 0,
      ResultDesc: 'Confirmation request processed successfully',
      internal_action: {
        idempotency_check: 'PASSED (New Transaction)',
        ledger_entry: 'RECORDED_CREDIT',
        stock_unlocked: true,
        sms_receipt_queued: true,
      },
    },
  },
];

export const ApiPlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<EndpointConfig>(endpoints[0]);
  const [activeTab, setActiveTab] = useState<'response' | 'headers' | 'request'>('response');
  const [isLoading, setIsLoading] = useState(false);
  const [executionTime, setExecutionTime] = useState<number>(selectedEndpoint.defaultLatency);
  const [copied, setCopied] = useState(false);

  const handleSelect = (endpoint: EndpointConfig) => {
    setSelectedEndpoint(endpoint);
    setActiveTab('response');
    setExecutionTime(endpoint.defaultLatency);
  };

  const handleExecute = () => {
    setIsLoading(true);
    const randomizedTime = Math.floor(selectedEndpoint.defaultLatency * (0.8 + Math.random() * 0.4));
    setTimeout(() => {
      setExecutionTime(randomizedTime);
      setIsLoading(false);
      toast.success(`200 OK — ${randomizedTime}ms`, {
        description: `${selectedEndpoint.method} ${selectedEndpoint.path}`,
      });
    }, 450);
  };

  const copyJson = () => {
    const dataToCopy =
      activeTab === 'request'
        ? selectedEndpoint.requestBody
        : activeTab === 'headers'
        ? selectedEndpoint.responseHeaders
        : selectedEndpoint.responseBody;

    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
    setCopied(true);
    toast.success('Copied payload to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-sandbox" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" /> LIVE INTERACTIVE API SANDBOX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Backend <span className="text-gradient-emerald">API Playground</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Test and inspect sample endpoint payloads, response headers, and latency stats directly from the browser.
          </p>
        </div>

        {/* Playground Container */}
        <div className="rounded-2xl border border-white/10 bg-card shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="p-4 border-b border-border bg-muted/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            
            {/* Endpoint Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {endpoints.map((ep) => (
                <button
                  key={ep.id}
                  onClick={() => handleSelect(ep)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
                    selectedEndpoint.id === ep.id
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                      : 'bg-background/80 text-muted-foreground hover:text-foreground border border-border/80'
                  }`}
                >
                  <span
                    className={`font-bold text-[10px] px-1 py-0.2 rounded ${
                      ep.method === 'GET'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-emerald-500/20 text-emerald-400'
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span>{ep.name}</span>
                </button>
              ))}
            </div>

            {/* Execute Request Button */}
            <button
              onClick={handleExecute}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95 disabled:opacity-60 transition-all ml-auto shrink-0 shadow-sm"
            >
              <Play className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : 'fill-slate-950'}`} />
              {isLoading ? 'Executing...' : 'Send Request'}
            </button>
          </div>

          {/* URL Bar */}
          <div className="px-5 py-3 border-b border-border bg-card/60 flex items-center justify-between text-xs font-mono overflow-x-auto">
            <div className="flex items-center gap-3">
              <span
                className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                  selectedEndpoint.method === 'GET'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}
              >
                {selectedEndpoint.method}
              </span>
              <span className="text-foreground font-medium">{selectedEndpoint.path}</span>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground shrink-0 pl-4">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                200 OK
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                {executionTime}ms
              </span>
            </div>
          </div>

          {/* Response Payload & Viewport */}
          <div className="p-4 sm:p-6 bg-slate-950 font-mono text-xs">
            
            {/* Tabs & Copy Action */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-3">
                {selectedEndpoint.requestBody && (
                  <button
                    onClick={() => setActiveTab('request')}
                    className={`pb-1 text-xs transition-colors ${
                      activeTab === 'request'
                        ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Request Body
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('response')}
                  className={`pb-1 text-xs transition-colors ${
                    activeTab === 'response'
                      ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Response Body (JSON)
                </button>
                <button
                  onClick={() => setActiveTab('headers')}
                  className={`pb-1 text-xs transition-colors ${
                    activeTab === 'headers'
                      ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Headers ({Object.keys(selectedEndpoint.responseHeaders).length})
                </button>
              </div>

              <button
                onClick={copyJson}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] border border-slate-800 transition-colors"
                title="Copy JSON to clipboard"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Output Viewer */}
            <div className="overflow-x-auto terminal-scroll max-h-[360px] p-2 rounded-lg bg-slate-900/50 border border-slate-800/80">
              <pre className="text-slate-200 leading-relaxed font-mono">
                {activeTab === 'request' &&
                  JSON.stringify(selectedEndpoint.requestBody, null, 2)}
                {activeTab === 'response' &&
                  JSON.stringify(selectedEndpoint.responseBody, null, 2)}
                {activeTab === 'headers' &&
                  JSON.stringify(selectedEndpoint.responseHeaders, null, 2)}
              </pre>
            </div>

            {/* Description footnote */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{selectedEndpoint.description}</span>
              <span className="text-slate-500 font-mono">Format: RFC 8259 JSON</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ApiPlayground;
