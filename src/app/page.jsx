"use client";

import { useEffect, useState } from 'react';
function MainComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#202124] font-inter">
      <link
        rel="icon"
        href="https://ucarecdn.com/15fe1d81-9f29-41fb-bdfe-810a4baf0f48/-/format/auto/"
      />
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm border-b border-[#dadce0]" : ""}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://ucarecdn.com/15fe1d81-9f29-41fb-bdfe-810a4baf0f48/-/format/auto/"
              alt="Pay OS Logo"
              className="h-32"
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#what-is"
              className="text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              What is Pay OS?
            </a>
            <a
              href="#why"
              className="text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              Why Pay OS?
            </a>
            <a
              href="#use-cases"
              className="text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#developers"
              className="text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              Developers
            </a>
            <a
              href="#about"
              className="text-[#5f6368] hover:text-[#1a73e8] transition-colors"
            >
              About
            </a>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#1a73e8] text-white hover:bg-[#1557b0] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>
      <section className="pt-32 pb-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#202124]">
              Pay OS
            </h1>
            <p className="text-xl md:text-2xl text-[#5f6368] mb-6">
              The Operating System for African Payments
            </p>
            <p className="text-lg text-[#5f6368] mb-8 max-w-4xl mx-auto">
              One platform to power every transaction from mobile money, bank
              transfers, cards, crypto, FX, and more. Pay OS abstracts the
              complexity of payments across 54 countries, enabling businesses to
              scale with confidence and developers to build without barriers.
            </p>
            <p className="text-lg text-[#5f6368] mb-12 max-w-4xl mx-auto">
              Accept payments across Africa and expand into MENA, the UK, the
              EU, North America and APAC using one platform.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-lg bg-[#1a73e8] text-white hover:bg-[#1557b0] transition-all text-lg">
                → Get Started
              </button>
              <button className="px-8 py-4 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all text-lg">
                → View API Docs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pay OS? Section - Keep bg-[#f8f9fa] */}
      <section id="what-is" className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#202124]">
            What is Pay OS?
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold mb-6 text-[#202124]">
              One Integration. Pan-African Reach. Borderless by Design.
            </h3>
            <p className="text-lg text-[#5f6368] mb-8">
              Africa's payment ecosystem is fragmented. Every country has
              different channels, currencies, and compliance hurdles, making
              scale painful and slow.
            </p>
            <p className="text-2xl font-bold text-[#202124] mb-8">
              Pay OS unifies it all.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-lg mb-4 text-white">
                → Mobile money (M-Pesa, MoMo, Airtel)
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-lg mb-4 text-white">
                → Bank transfers and real-time rails
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#ffffff] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-lg mb-4 text-[#202124]">
                → Local and international cards
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-lg mb-4 text-white">
                → Crypto and stablecoin payment rails
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-lg mb-4 text-white">
                → USSD and offline-compatible methods
              </p>
            </div>
          </div>
          <div className="text-center mb-12">
            <p className="text-xl font-bold mb-8 text-[#202124]">Plus:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-lg text-white">
                  → Smart routing and liquidity optimization
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-lg text-white">
                  → Built-in KYC, AML, and risk controls
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-lg text-[#202124]">
                  → Multi-currency wallet infrastructure
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-lg text-white">→ Real-time FX conversion</p>
              </div>
              <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
                <p className="text-lg text-white">
                  → Compliance-aware architecture in every market
                </p>
              </div>
            </div>
          </div>
          <div className="text-center text-lg text-[#5f6368]">
            <p>
              Whether you're a startup in Nairobi or a scale-up expanding into
              MENA, the UK, the EU, North America or APAC, Pay OS gives you the
              tools to move money like never before.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pay OS? Section - Change to bg-[#ffffff] */}
      <section id="why" className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#202124]">
            Why Pay OS?
          </h2>
          <h3 className="text-3xl font-bold text-center mb-16 text-[#202124]">
            The Infrastructure Layer You've Been Waiting For
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-white">
                Plug-and-Play Rail Access
              </h4>
              <p className="text-white">
                → Get instant connectivity to all major African payment methods
                with a single integration
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-white">
                Borderless Commerce, Localized Execution
              </h4>
              <p className="text-white">
                → Operate across countries, currencies, and regulations without
                having to re-architect
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#ffffff] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#202124]">
                Developer-Centric Stack
              </h4>
              <p className="text-[#202124]">
                → Clean REST APIs, language-specific SDKs, real-time webhooks,
                sandbox environments, CLI tools, and detailed docs.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-white">
                Built-in Trust & Compliance
              </h4>
              <p className="text-white">
                → Advanced fraud detection, jurisdiction-specific KYC flows,
                transaction monitoring, and customizable rules
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-white">
                Wallet & Treasury Tools
              </h4>
              <p className="text-white">
                → Spin up programmable multi-currency wallets, manage liquidity,
                and support instant settlement flows
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#ffffff] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4 text-[#202124]">
                Scalable & Reliable
              </h4>
              <p className="text-[#202124]">
                → Pay OS is designed for uptime, observability, and resilience,
                built to support everything from MVPs to government disbursement
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Change to bg-[#f8f9fa] */}
      <section id="use-cases" className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#202124]">
            Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Fintechs & Neobanks
              </h3>
              <p className="text-white mb-4">
                Build financial products faster with pre-integrated rails,
                compliance tooling, and modular wallet infrastructure.
              </p>
              <p className="text-white">
                → Launch digital banks, payment apps, or crypto platforms with
                one stack. Reach customers in MENA, the UK, the EU, North
                America and APAC using the same infrastructure.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Marketplaces & Superapps
              </h3>
              <p className="text-white mb-4">
                Accept payments in local methods and automate complex flows like
                escrow, split payments, and vendor payouts.
              </p>
              <p className="text-white">
                → Power frictionless buyer-seller transactions with programmable
                logic.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#ffffff] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-[#202124]">
                Enterprises & Global Companies
              </h3>
              <p className="text-[#202124] mb-4">
                Unify cross-border payments, manage multi-currency flows, and
                optimize FX without building local integrations.
              </p>
              <p className="text-[#202124]">
                → Expand your reach while streamlining treasury operations.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Airlines, Travel, and Logistics
              </h3>
              <p className="text-white mb-4">
                Support mobile money, local cards, and region-specific wallets
                for cross-border bookings, refunds, and loyalty payouts.
              </p>
              <p className="text-white">
                → Let your users pay how they want, wherever they are.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Governments & NGOs
              </h3>
              <p className="text-white mb-4">
                Modernize your digital financial services with robust, traceable
                payments infrastructure.
              </p>
              <p className="text-white">
                → Disburse aid, collect levies or taxes, manage public services
                with transparency and control.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#ffffff] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4 text-[#202124]">
                Gig & Creator Platforms
              </h3>
              <p className="text-[#202124] mb-4">
                Enable payouts to freelancers, content creators, and gig workers
                across the continent.
              </p>
              <p className="text-[#202124]">
                → Support tipping, micropayments, and real-time earnings in any
                channel or currency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section - Change to bg-[#ffffff] */}
      <section id="developers" className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#202124]">
            For Developers
          </h2>
          <h3 className="text-2xl font-bold text-center mb-12 text-[#202124]">
            Everything Developers Need - Nothing They Don't
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-white">
                → Modern REST API with detailed references
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-white">
                → Sandbox environments for staging & testing
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[#202124]">
                → SDKs for Node.js, Python, Go, and more
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-white">
                → Webhooks for real-time payment events
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#0D652D] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-white">
                → CLI tools for faster local development
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#F8F9FA] border border-[#DADCE0] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-[#202124]">
                → Slack and email support for developers
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
              <p className="text-white">
                → Versioned APIs with zero-breaking updates
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-[#1a73e8] text-white hover:bg-[#1557b0] transition-all">
              → Read the Docs
            </button>
            <button
              className="px-8 py-4 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all"
              onClick={() =>
                (window.location.href = "mailto:sales@payments.africa")
              }
            >
              → Request a Demo
            </button>
            <button
              className="px-8 py-4 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all"
              onClick={() =>
                (window.location.href = "mailto:sales@payments.africa")
              }
            >
              → Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section - Keep bg-[#f8f9fa] */}
      <section id="about" className="py-20 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#202124]">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-12 text-[#202124]">
              We're Building Africa's Financial Backbone. Infrastructure, Not
              Just Software
            </h3>
            <p className="text-xl mb-8 text-[#5f6368]">
              Pay OS was founded with a bold belief:
            </p>
            <p className="text-xl italic mb-12 text-[#5f6368]">
              Africa doesn't need more fintech apps. It needs infrastructure
              that powers all of them.
            </p>
            <p className="text-[#5f6368] mb-8">
              We're engineers, product thinkers, and ecosystem operators
              building the invisible layer that enables inclusive, borderless,
              and programmable money movement across the continent.
            </p>
            <p className="text-[#5f6368]">
              Headquartered in San Francisco with team members in London and
              across Africa, we bring together deep experience in fintech,
              compliance, and developer ecosystems. Pay OS empowers businesses
              to grow across Africa and scale into global markets including
              MENA, the UK, the EU, North America and APAC.
            </p>
          </div>
        </div>
      </section>

      {/* Start Building Section - Keep bg-[#ffffff] */}
      <section className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#202124]">
            Start Building with Pay OS
          </h2>
          <p className="text-xl mb-12 max-w-4xl mx-auto text-[#5f6368]">
            Whether you're launching a fintech, modernizing legacy
            infrastructure, or entering the African market, Pay OS is the
            infrastructure layer you can build on.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg bg-[#1a73e8] text-white hover:bg-[#1557b0] transition-all">
              → Get Started
            </button>
            <button
              className="px-8 py-4 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all"
              onClick={() =>
                (window.location.href = "mailto:sales@payments.africa")
              }
            >
              → Request a Demo
            </button>
            <button
              className="px-8 py-4 rounded-lg border border-[#1a73e8] text-[#1a73e8] hover:bg-[#1557b0] hover:text-white hover:border-[#1557b0] transition-all"
              onClick={() =>
                (window.location.href = "mailto:sales@payments.africa")
              }
            >
              → Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Founder Profile Section - Add bg-[#f8f9fa] to outer div */}
      <div className="container mx-auto px-4 py-20 bg-[#f8f9fa]">
        <div className="max-w-md mx-auto p-8 rounded-[16px] bg-[#1A73E8] shadow-lg hover:-translate-y-1 transition-all">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">
            Founder Profile
          </h2>
          <div className="text-center">
            <div
              className="badge-base LI-profile-badge"
              data-locale="en_US"
              data-size="medium"
              data-theme="light"
              data-type="HORIZONTAL"
              data-vanity="tbrunoh"
              data-version="v1"
            >
              <a
                className="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/tbrunoh?trk=profile-badge"
              >
                Tom Bruno
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Change to bg-[#ffffff] */}
      <footer className="py-12 bg-[#ffffff]">
        <div className="container mx-auto px-4">
          <div className="text-center text-[#5f6368]">
            <p>
              © 2025 Pay OS. All rights reserved. Email:{" "}
              <a
                href="mailto:solved@payments.africa"
                className="text-[#1a73e8] hover:underline"
              >
                solved@payments.africa
              </a>
            </p>
          </div>
        </div>
      </footer>

      <script
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
        type="text/javascript"
      ></script>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section {
          animation: fadeIn 0.6s ease-out;
        }
        .hover-lift {
          transition: transform 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}
