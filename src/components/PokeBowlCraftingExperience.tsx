import React from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Check, Utensils, Layers } from "lucide-react";
import { DishImage } from "./DishImage";

interface CraftStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  ingredients: string[];
  focusDishId: string;
  layerHighlight: string;
}

const CRAFT_STEPS: CraftStep[] = [
  {
    number: "01",
    title: "Le Lit de Riz à Sushi",
    subtitle: "La base parfaite",
    description: "Préparé selon la tradition, notre riz à sushi est délicatement vinaigré et assaisonné pour une texture fondante et savoureuse, parfait sous vos ingrédients frais.",
    emoji: "🍚",
    ingredients: ["Riz à sushi traditionnel", "Assaisonnement délicat", "Texture fondante"],
    focusDishId: "sweet-chicken",
    layerHighlight: "Fond du bowl · Riz à sushi assaisonné",
  },
  {
    number: "02",
    title: "La Protéine Noble Découpée Minute",
    subtitle: "Le cœur du goût",
    description: "Du saumon cru qualité sashimi découpé chaque matin, de vrais cubes de poulet doré au grill ou des scampis saisis à la flamme.",
    emoji: "🍗",
    ingredients: ["Filet de poulet grillé", "Saumon frais sashimi", "Scampis à la flamme"],
    focusDishId: "sweet-chicken",
    layerHighlight: "Centre · Morceaux dorés juteux",
  },
  {
    number: "03",
    title: "L'Assortiment Fraîcheur & Fruits",
    subtitle: "Vitamines & couleurs",
    description: "Avocat Haas crémeux découpé en éventail, mangue mûre en cubes sucrés, fèves d'edamame croquantes, tomates cerises juteuses et guacamole maison.",
    emoji: "🥑",
    ingredients: ["Avocat frais crémeux", "Mangue mûre", "Guacamole maison", "Edamame & Maïs doux"],
    focusDishId: "saumon-wasabi",
    layerHighlight: "Couronne · Légumes et fruits frais",
  },
  {
    number: "04",
    title: "Les Sauces Signatures Maison",
    subtitle: "L'onctuosité & l'équilibre",
    description: "Nappées en filet élégant sur la composition : Spicy Mayo maison au piment doux, Mayo Wasabi subtilement relevée, ou Teriyaki sucrée-salée brillante.",
    emoji: "🌶️",
    ingredients: ["Spicy mayo maison", "Mayo wasabi", "Teriyaki glacée", "Sésame doux"],
    focusDishId: "scampis-royaux",
    layerHighlight: "Nappage · Sauce veloutée signature",
  },
  {
    number: "05",
    title: "Le Crunch & Finition Toppings",
    subtitle: "La signature croquante",
    description: "Oignons croustillants dorés, graines de sésame noir & blanc toastées, brisures de nachos et flocons de chili pour une texture irrésistible à chaque bouchée.",
    emoji: "🧅",
    ingredients: ["Oignons croustillants", "Sésame mix toasté", "Nachos croustillants", "Flocons de chili"],
    focusDishId: "spicy-chicken",
    layerHighlight: "Touche finale · Toppings ultra croquants",
  },
];

export function PokeBowlCraftingExperience() {
  const [activeStep, setActiveStep] = React.useState(0);
  const current = CRAFT_STEPS[activeStep];

  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0d211b] p-6 sm:p-10 lg:p-12 text-white shadow-lift">
      {/* Decorative ambient lights */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d7ff45]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#ff705f]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d7ff45]/25 bg-[#d7ff45]/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7ff45]">
          <Layers className="h-3 w-3" />
          Anatomie d'un Poké Bowl
        </div>
        <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
          Comment naît votre Poké Bowl sous vos yeux
        </h2>
        <p className="mt-3 text-sm text-white/70 leading-relaxed">
          Chaque ingrédient est sélectionné le matin, préparé minute et assemblé couche après couche pour un équilibre gustatif parfait.
        </p>
      </div>

      {/* Main Experience Grid */}
      <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        
        {/* Step Navigation & Details */}
        <div className="space-y-3">
          {CRAFT_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`group w-full text-left rounded-2xl p-4 sm:p-5 transition-all duration-300 border ${
                  isActive
                    ? "bg-white/10 border-[#d7ff45]/50 shadow-lg"
                    : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/15"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-black text-xs transition ${
                        isActive
                          ? "bg-[#d7ff45] text-[#10251f]"
                          : "bg-white/10 text-white/70 group-hover:bg-white/20"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-wider ${
                        isActive ? "text-[#d7ff45]" : "text-white/45"
                      }`}>
                        {step.subtitle}
                      </p>
                      <h3 className="text-base sm:text-lg font-black text-white">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xl">{step.emoji}</span>
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-white/10"
                  >
                    <p className="text-xs leading-relaxed text-white/75">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {step.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-full bg-[#10251f] px-2.5 py-1 text-[10px] font-bold text-white/90 border border-white/10"
                        >
                          <Check className="h-3 w-3 text-[#d7ff45]" />
                          {ing}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>

        {/* Visual Real Dish Showcase matching Step */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#10251f] p-3 shadow-2xl">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.focusDishId + activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55 }}
                  className="h-full w-full"
                >
                  <DishImage
                    dishId={current.focusDishId}
                    alt={current.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Layer Indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#d7ff45] backdrop-blur-md border border-white/10">
                  <Sparkles className="h-3 w-3" />
                  Couche {current.number} / 05
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur-md">
                  {current.layerHighlight}
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/75 p-4 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#d7ff45]">
                      Composition maîtrisée
                    </p>
                    <p className="text-sm font-black text-white">
                      {current.title}
                    </p>
                  </div>
                  <Link
                    to="/sur-mesure"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d7ff45] text-[#10251f] transition hover:scale-110"
                    aria-label="Composer mon bowl"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Stepper CTA */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2">
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-[#d7ff45]" />
                <span className="text-xs font-bold text-white/80">
                  Composez chaque couche selon vos envies
                </span>
              </div>
              <Link
                to="/sur-mesure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff705f] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-[#ff5542]"
              >
                Créer mon Bowl
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
