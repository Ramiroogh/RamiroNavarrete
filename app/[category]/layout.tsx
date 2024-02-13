import Navbar from "../components/Category/Navbar";

export default function CategoryLayout({children}: {children: React.ReactNode}) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navbar />
   
        {children}
      </section>
    )
  }