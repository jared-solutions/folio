import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  User,
  Briefcase,
  Layers,
  Mail,
  Sun,
  Moon,
  Laptop,
  Copy,
  Download,
  Github,
  Linkedin,
  FileCode2,
} from "lucide-react";
import { toast } from "sonner";

interface CommandMenuProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const setOpen = isControlled ? setControlledOpen! : setInternalOpen;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ombongijared2@gmail.com");
    toast.success("Email copied to clipboard!", {
      description: "ombongijared2@gmail.com",
    });
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList className="max-h-80">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
            className="cursor-pointer"
          >
            <Home className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/about"))}
            className="cursor-pointer"
          >
            <User className="mr-2 h-4 w-4 text-emerald-400" />
            <span>About & Experience</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/projects"))}
            className="cursor-pointer"
          >
            <Briefcase className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Projects & Architecture</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/services"))}
            className="cursor-pointer"
          >
            <Layers className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Services & Capabilities</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/contact"))}
            className="cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Contact & Inquiries</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Featured Systems">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/projects/medicinachain"))}
            className="cursor-pointer"
          >
            <FileCode2 className="mr-2 h-4 w-4 text-emerald-400" />
            <span>MedicinaChain — Enterprise Modular HMIS</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/projects/omilife"))}
            className="cursor-pointer"
          >
            <FileCode2 className="mr-2 h-4 w-4 text-cyan-400" />
            <span>Omilife — Pharmaceutical Distribution Platform</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/projects/poultryops"))}
            className="cursor-pointer"
          >
            <FileCode2 className="mr-2 h-4 w-4 text-amber-400" />
            <span>PoultryOps — Commercial Poultry ERP & AgTech SaaS</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/projects/rentconnect"))}
            className="cursor-pointer"
          >
            <FileCode2 className="mr-2 h-4 w-4 text-indigo-400" />
            <span>RentConnect — Real-time Property Platform</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem onSelect={() => runCommand(copyEmail)} className="cursor-pointer">
            <Copy className="mr-2 h-4 w-4 text-slate-400" />
            <span>Copy Email Address</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => {
                const link = document.createElement("a");
                link.href = "/Jared_Mogonchi_CV.pdf";
                link.download = "Jared_Mogonchi_CV.pdf";
                link.click();
                toast.success("Resume download started");
              })
            }
            className="cursor-pointer"
          >
            <Download className="mr-2 h-4 w-4 text-slate-400" />
            <span>Download Resume / CV</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open("https://github.com/jared-solutions", "_blank")
              )
            }
            className="cursor-pointer"
          >
            <Github className="mr-2 h-4 w-4 text-slate-400" />
            <span>GitHub Profile</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() =>
                window.open(
                  "https://www.linkedin.com/in/jared-ombongi-b9187127b",
                  "_blank"
                )
              )
            }
            className="cursor-pointer"
          >
            <Linkedin className="mr-2 h-4 w-4 text-slate-400" />
            <span>LinkedIn Profile</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Theme">
          <CommandItem
            onSelect={() => runCommand(() => setTheme("light"))}
            className="cursor-pointer"
          >
            <Sun className="mr-2 h-4 w-4 text-amber-500" />
            <span>Light Mode</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => setTheme("dark"))}
            className="cursor-pointer"
          >
            <Moon className="mr-2 h-4 w-4 text-indigo-400" />
            <span>Dark Mode (Obsidian)</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => setTheme("system"))}
            className="cursor-pointer"
          >
            <Laptop className="mr-2 h-4 w-4 text-slate-400" />
            <span>System Default</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
