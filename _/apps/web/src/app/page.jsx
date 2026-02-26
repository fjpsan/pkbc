export default function HomePage() {
  const featuredArticles = [
    {
      id: 1,
      category: "Featured Pick",
      title: "The Midnight Library",
      summary:
        "Join us as we explore parallel lives and infinite possibilities through Matt Haig's compelling narrative.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      large: true,
    },
    {
      id: 2,
      category: "Current Read",
      title: "Lessons in Chemistry",
      summary:
        "Discover an inspiring tale of a woman breaking barriers in 1960s science.",
      image:
        "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      category: "Upcoming",
      title: "Tomorrow and Tomorrow and Tomorrow",
      summary:
        "A sweeping novel about friendship, creativity, and the video game industry.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      category: "Classic Reread",
      title: "Jane Eyre",
      summary:
        "Revisiting Charlotte Brontë's timeless gothic romance and feminist masterpiece.",
      image:
        "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    },
  ];

  const verticalFeed = [
    {
      id: 5,
      category: "Book Discussion",
      title: "Character Analysis: Morality and Complexity",
      summary:
        "Deep dive into the morally grey characters that define modern literature and what they teach us about human nature.",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      category: "Author Spotlight",
      title: "Contemporary Voices Shaping Fiction",
      summary:
        "Exploring the innovative storytelling techniques of authors redefining the literary landscape.",
      image:
        "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      category: "Literary Trends",
      title: "Genre-Bending Narratives",
      summary:
        "How contemporary authors are blending genres to create fresh and unexpected reading experiences.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
  ];

  const highlights = [
    {
      title: "Monthly Selection",
      description: "Curated book picks for thoughtful readers",
    },
    {
      title: "Discussion Guides",
      description: "In-depth guides for meaningful conversations",
    },
    {
      title: "Author Events",
      description: "Connect with writers and fellow readers",
    },
  ];

  return (
    <main className="bg-[#000000] font-panton relative overflow-hidden">
      {/* Background Gradient Patterns - Fixed position */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Teal circular gradient - top left */}
        <div
          className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(47, 158, 153, 0.4) 0%, transparent 70%)",
          }}
        ></div>

        {/* Orange circular gradient - top right */}
        <div
          className="absolute top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(242, 140, 24, 0.4) 0%, transparent 70%)",
          }}
        ></div>

        {/* Teal circular gradient - middle left */}
        <div
          className="absolute top-[800px] -left-40 w-[450px] h-[450px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(47, 158, 153, 0.35) 0%, transparent 70%)",
          }}
        ></div>

        {/* Orange circular gradient - bottom right */}
        <div
          className="absolute bottom-60 -right-60 w-[550px] h-[550px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(242, 140, 24, 0.35) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* SECTION 1: Featured Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 relative z-10">
        {/* Subtle circular gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(47, 158, 153, 0.3) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute bottom-20 -left-20 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(242, 140, 24, 0.3) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Large Feature */}
          <div className="md:row-span-2 relative overflow-hidden group cursor-pointer">
            <img
              src={featuredArticles[0].image}
              alt={featuredArticles[0].title}
              className="w-full h-full object-cover min-h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/50 to-transparent p-8 flex flex-col justify-end">
              <span className="text-[#F28C18] text-xs uppercase tracking-widest font-bold mb-3">
                {featuredArticles[0].category}
              </span>
              <h2 className="text-[#FFFFFF] text-5xl md:text-6xl font-bold leading-tight mb-4 group-hover:text-[#F28C18] transition-colors duration-300">
                {featuredArticles[0].title}
              </h2>
              <p className="text-[#FFFFFF] text-lg mb-6">
                {featuredArticles[0].summary}
              </p>
              <a
                href="#"
                className="text-[#F28C18] text-sm uppercase tracking-wide font-bold hover:text-[#FFFFFF] transition-colors duration-300"
              >
                Read More →
              </a>
            </div>
          </div>

          {/* Smaller Features */}
          {featuredArticles.slice(1).map((article) => (
            <div
              key={article.id}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover min-h-[240px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[#F28C18] text-xs uppercase tracking-widest font-bold mb-2">
                  {article.category}
                </span>
                <h3 className="text-[#FFFFFF] text-2xl font-bold leading-tight mb-2 group-hover:text-[#2F9E99] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#BFBFBF] text-sm">{article.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Vertical Feed */}
      <section
        id="bookclub"
        className="max-w-[1400px] mx-auto px-6 py-16 border-t border-[#2F9E99]/30 relative z-10"
      >
        {/* Subtle circular gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
          <div
            className="absolute top-1/4 left-10 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(242, 140, 24, 0.4) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(47, 158, 153, 0.4) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="mb-12 relative z-10">
          <h2 className="text-[#FFFFFF] text-4xl font-bold uppercase tracking-wide">
            Book Club Discussions
          </h2>
        </div>
        <div className="space-y-8">
          {verticalFeed.map((article) => (
            <div
              key={article.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 group cursor-pointer"
            >
              <div className="md:col-span-1">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-center">
                <span className="text-[#F28C18] text-xs uppercase tracking-widest font-bold mb-3">
                  {article.category}
                </span>
                <h3 className="text-[#FFFFFF] text-3xl font-bold leading-tight mb-4 group-hover:text-[#2F9E99] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6">
                  {article.summary}
                </p>
                <a
                  href="#"
                  className="text-[#F28C18] text-sm uppercase tracking-wide font-bold hover:text-[#2F9E99] transition-colors duration-300"
                >
                  Join Discussion →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Events Highlight Block */}
      <section id="events" className="relative py-24 overflow-hidden">
        {/* Subtle circular gradient backgrounds */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
          <div
            className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(47, 158, 153, 0.4) 0%, transparent 70%)",
            }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(242, 140, 24, 0.4) 0%, transparent 70%)",
            }}
          ></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <h2 className="text-[#FFFFFF] text-4xl font-bold uppercase tracking-wide text-center mb-16">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-none border border-[#2F9E99]/30 bg-[#000000]"
              >
                <h3 className="text-[#F28C18] text-2xl font-bold uppercase tracking-wide mb-4">
                  {highlight.title}
                </h3>
                <p className="text-[#BFBFBF] text-lg leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
