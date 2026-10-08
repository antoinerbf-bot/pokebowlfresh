import React from "react";
import { Heart, MessageCircle, Instagram, ExternalLink, Sparkles } from "lucide-react";
import bowlSaumon from "@/assets/bowl-saumon.jpg";
import bowlSweetChicken from "@/assets/bowl-sweet-chicken.jpg";
import bowlScampis from "@/assets/bowl-scampis.jpg";
import bowlSpicyChicken from "@/assets/bowl-spicy-chicken.jpg";

interface InstaPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
}

const INSTA_POSTS: InstaPost[] = [
  {
    id: "post-1",
    image: bowlSaumon,
    likes: 248,
    comments: 19,
    caption: "Le Saumon Wasabi dans toute sa fraîcheur : avocat fondant, edamames croquants & sésame doré 🥑✨",
    tag: "#PokeBowlVisé",
  },
  {
    id: "post-2",
    image: bowlSweetChicken,
    likes: 312,
    comments: 24,
    caption: "Poulet mariné sweet & mangue fraîche du jour : le mix sucré-salé qui met tout le monde d'accord 🥭🍗",
    tag: "#SweetChicken",
  },
  {
    id: "post-3",
    image: bowlScampis,
    likes: 195,
    comments: 14,
    caption: "Scampis Royaux sautés minute sur lit de riz à sushi vinaigré. Prêt en moins de 3 minutes pour votre pause déj 🦐",
    tag: "#FraisDuJour",
  },
  {
    id: "post-4",
    image: bowlSpicyChicken,
    likes: 276,
    comments: 22,
    caption: "Pour ceux qui aiment quand ça réveille les papilles : Spicy Chicken et sauce pimentée maison 🔥",
    tag: "#SpicyVibes",
  },
];

export function PokawaInstagramWall() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-black/5">
      <div className="mx-auto max-w-[1340px] px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ff705f]/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff705f]">
            <Instagram className="h-3.5 w-3.5" />
            La Communauté Poke N Bowl
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#10251f]">
            L’actu sur nos réseaux
          </h2>
          <p className="mt-2 text-sm text-[#68756f]">
            Partagez vos bowls à Visé en story et taguez <span className="font-bold text-[#10251f]">@POKE_NBOWL</span> pour être reposté !
          </p>
        </div>

        {/* 4 Instagram Visual Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/POKE_NBOWL"
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-black/5 bg-[#faf8f4] shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              {/* Photo */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#ece8dc]">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Dark overlay on hover with likes/comments (Pokawa style) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 p-4 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 text-white">
                  <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Heart className="h-4 w-4 fill-[#ff705f] text-[#ff705f]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="h-4 w-4 fill-white" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-center text-[11px] leading-snug line-clamp-3 text-white/90">
                    {post.caption}
                  </p>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-wider backdrop-blur-md">
                    Voir sur Instagram →
                  </span>
                </div>

                {/* Permanent subtle tag pill */}
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-white shadow-sm group-hover:opacity-0 transition-opacity">
                  {post.tag}
                </span>
              </div>

              {/* Card Footer */}
              <div className="p-4 flex items-center justify-between text-xs text-[#68756f]">
                <span className="font-extrabold text-[#10251f]">@POKE_NBOWL</span>
                <Instagram className="h-4 w-4 text-[#ff705f] group-hover:scale-110 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Big Follow Button */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/POKE_NBOWL"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#10251f] bg-white px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#10251f] shadow-soft transition hover:bg-[#10251f] hover:text-white hover:scale-105 active:scale-95"
          >
            <Instagram className="h-4 w-4 text-[#ff705f]" />
            <span>Suivez-nous sur Instagram @POKE_NBOWL</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
