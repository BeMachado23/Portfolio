import { ShowcaseTab } from "@/data/showcaseData";

interface ShowcaseTabsProps {
  activeTab: ShowcaseTab;
  onTabChange: (tab: ShowcaseTab) => void;
}

const tabs: { id: ShowcaseTab; label: string }[] = [
  { id: "projects", label: "PROJECTS" },
  { id: "certificates", label: "CERTIFICATES" },
  { id: "techstack", label: "TECHSTACK" },
];

export default function ShowcaseTabs({ activeTab, onTabChange }: ShowcaseTabsProps) {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-66">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative text-xl md:text-2xl lg:text-5xl font-bold italic tracking-tighter transition-colors ${
            activeTab === tab.id
              ? "text-white"
              : "text-neutral-600 hover:text-neutral-400"
          }`}
        >
          {tab.label}
          {/* Underline indicator */}
          <span 
            className={`absolute -bottom-2 left-0 w-full h-0.5 bg-[#966DCE] transition-all duration-300 ${
              activeTab === tab.id 
                ? "opacity-100 scale-x-100" 
                : "opacity-0 scale-x-0"
            }`} 
          />
        </button>
      ))}
    </div>
  );
}
