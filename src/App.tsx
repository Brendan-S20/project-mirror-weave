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
import AIContentCentral from "./pages/AIContentCentral";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ProjectPage from "./pages/ProjectPage";
import Enterprise from "./pages/Enterprise";
import Reviews from "./pages/Reviews";
import ServicePage from "./pages/ServicePage";
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
              
              {/* Services */}
              <Route path="/design-services" element={<ServicePage />} />
              <Route path="/ad-creative" element={<ServicePage />} />
              <Route path="/video-production" element={<ServicePage />} />
              <Route path="/ai-creative" element={<ServicePage />} />
              <Route path="/branding-services" element={<ServicePage />} />
              <Route path="/web-design-services" element={<ServicePage />} />
              <Route path="/social-media-creative" element={<ServicePage />} />
              <Route path="/presentation-design" element={<ServicePage />} />
              <Route path="/motion-design" element={<ServicePage />} />
              <Route path="/illustration-design-services" element={<ServicePage />} />
              <Route path="/print-design" element={<ServicePage />} />
              <Route path="/email-design-services" element={<ServicePage />} />
              <Route path="/landing-page-design" element={<ServicePage />} />
              <Route path="/packaging-merchandise-design" element={<ServicePage />} />
              <Route path="/ebook-digital-report-design" element={<ServicePage />} />
              <Route path="/copywriting" element={<ServicePage />} />
              <Route path="/marketing-strategy" element={<ServicePage />} />
              <Route path="/campaign-strategy-services" element={<ServicePage />} />
              <Route path="/concept-creation" element={<ServicePage />} />
              <Route path="/design-systems" element={<ServicePage />} />
              <Route path="/product-design" element={<ServicePage />} />
              <Route path="/ar-3d-design" element={<ServicePage />} />
              <Route path="/immersive-design-services" element={<ServicePage />} />

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
              {/* Legacy routes */}
              <Route path="/compare-superside-vs-agency" element={<CompareVsAgency />} />
              <Route path="/compare-superside-vs-freelancers" element={<CompareVsFreelancers />} />
              <Route path="/compare-superside-vs-inhouse" element={<CompareVsInhouse />} />
              <Route path="/compare-superside-vs-designpickle" element={<CompareVsDesignPickle />} />
              <Route path="/compare-superside-vs-designity" element={<CompareVsDesignity />} />

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
              <Route path="/ai-content-central" element={<AIContentCentral />} />

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
