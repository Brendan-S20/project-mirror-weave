import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { CTAProvider } from "@/contexts/CTAContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ProjectPage from "./pages/ProjectPage";
import Enterprise from "./pages/Enterprise";
import Reviews from "./pages/Reviews";
import ServicePage from "./pages/ServicePage";
import ServicesIndex from "./pages/ServicesIndex";
import PillarPage from "./pages/PillarPage";
import MicroServicePage from "./pages/MicroServicePage";
import ThankYou from "./pages/ThankYou";
import ThankYouSolo from "./pages/ThankYouSolo";
import ThankYouSmallBusiness from "./pages/ThankYouSmallBusiness";
import ThankYouGrowingTeam from "./pages/ThankYouGrowingTeam";
import ThankYouMidMarket from "./pages/ThankYouMidMarket";
import ThankYouEnterprise from "./pages/ThankYouEnterprise";
import { BlogIndex, BlogPostPage, AuthorPage, TagPage } from "./pages/BlogPages";
import { CompareIndex, CompareVsAgency, CompareVsFreelancers, CompareVsInhouse, CompareVsDesignPickle, CompareVsDesignity } from "./pages/ComparePages";
import { LearnIndex, GuidesIndex, GuidePage, PlaybooksIndex, PlaybookPage, KnowledgeIndex, KnowledgePage, ReportsIndex, ReportPage, EventsIndex, EventPage, FAQPage, PrivacyPage, TermsPage, TrustCenterPage, BugBountyPage } from "./pages/ResourcePages";
import { OurCreativeTalent, OurTechnology, AIExcellence, BrandBrain, CreativeBrief } from "./pages/CompanyPages";
import { services } from "./data/services";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CTAProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/projects/:slug" element={<ProjectPage />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/thank-you-solo" element={<ThankYouSolo />} />
              <Route path="/thank-you-small-business" element={<ThankYouSmallBusiness />} />
              <Route path="/thank-you-growing-team" element={<ThankYouGrowingTeam />} />
              <Route path="/thank-you-mid-market" element={<ThankYouMidMarket />} />
              <Route path="/thank-you-enterprise" element={<ThankYouEnterprise />} />

              {/* Services - new pillar + service + micro-service routes */}
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/:pillarSlug" element={<PillarPage />} />
              {/* Direct pillar aliases (SEO-friendly) */}
              <Route path="/growth-infrastructure" element={<PillarPage />} />
              <Route path="/automation-systems" element={<PillarPage />} />
              <Route path="/creative-content" element={<PillarPage />} />
              <Route path="/technology-it" element={<PillarPage />} />
              <Route path="/technology-it-services" element={<PillarPage />} />
              {services.map((s) => (
                <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
              ))}
              {services.map((s) => (
                <Route key={`${s.slug}-micro`} path={`/${s.slug}/:microSlug`} element={<MicroServicePage />} />
              ))}

              {/* Blog */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/authors/:slug" element={<AuthorPage />} />
              <Route path="/tags/:slug" element={<TagPage />} />

              {/* Compare */}
              <Route path="/compare" element={<CompareIndex />} />
              <Route path="/compare-thenorth-vs-agency" element={<CompareVsAgency />} />
              <Route path="/compare-thenorth-vs-freelancers" element={<CompareVsFreelancers />} />
              <Route path="/compare-thenorth-vs-inhouse" element={<CompareVsInhouse />} />
              <Route path="/compare-thenorth-vs-designpickle" element={<CompareVsDesignPickle />} />
              <Route path="/compare-thenorth-vs-designity" element={<CompareVsDesignity />} />

              {/* Resources */}
              <Route path="/learn" element={<LearnIndex />} />
              <Route path="/guides" element={<GuidesIndex />} />
              <Route path="/guides/:slug" element={<GuidePage />} />
              <Route path="/playbooks" element={<PlaybooksIndex />} />
              <Route path="/playbooks/:slug" element={<PlaybookPage />} />
              <Route path="/knowledge" element={<KnowledgeIndex />} />
              <Route path="/knowledge/:slug" element={<KnowledgePage />} />
              <Route path="/reports" element={<ReportsIndex />} />
              <Route path="/reports/:slug" element={<ReportPage />} />
              <Route path="/events" element={<EventsIndex />} />
              <Route path="/events/:slug" element={<EventPage />} />
              <Route path="/faq" element={<FAQPage />} />

              {/* Company */}
              <Route path="/our-creative-talent" element={<OurCreativeTalent />} />
              <Route path="/our-technology" element={<OurTechnology />} />
              <Route path="/ai-excellence" element={<AIExcellence />} />
              <Route path="/brandbrain" element={<BrandBrain />} />
              <Route path="/creative-brief" element={<CreativeBrief />} />

              {/* Legal */}
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms-of-use" element={<TermsPage />} />
              <Route path="/trust-center" element={<TrustCenterPage />} />
              <Route path="/bug-bounty-program-policy" element={<BugBountyPage />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </CTAProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
