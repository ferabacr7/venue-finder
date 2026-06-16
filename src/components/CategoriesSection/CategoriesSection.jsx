import {
  Gem,
  BriefcaseBusiness,
  Palmtree,
  Building2,
  PartyPopper,
} from "lucide-react";

import "./CategoriesSection.css";

function CategoriesSection() {
  const categories = [
    {
      icon: <Gem size={42} strokeWidth={1.25} />,
      title: "Weddings",
    },
    {
      icon: <BriefcaseBusiness size={42} strokeWidth={1.25} />,
      title: "Corporate Events",
    },
    {
      icon: <Palmtree size={42} strokeWidth={1.25} />,
      title: "Beachfront Venues",
    },
    {
      icon: <Building2 size={42} strokeWidth={1.25} />,
      title: "Luxury Villas",
    },
    {
      icon: <PartyPopper size={42} strokeWidth={1.25} />,
      title: "Private Events",
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="categories-header">
          <p className="categories-subtitle">Browse By Category</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <article key={category.title} className="category-card">
              <div className="category-icon">{category.icon}</div>

              <h3>{category.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;