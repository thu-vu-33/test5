import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Thumbnail = React.lazy(() => import("pages/Thumbnail"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Five = React.lazy(() => import("pages/Five"));
const One = React.lazy(() => import("pages/One"));
const Eighteen = React.lazy(() => import("pages/Eighteen"));
const Sixteen = React.lazy(() => import("pages/Sixteen"));
const Nine = React.lazy(() => import("pages/Nine"));
const Seventeen = React.lazy(() => import("pages/Seventeen"));
const Eight = React.lazy(() => import("pages/Eight"));
const Six = React.lazy(() => import("pages/Six"));
const Fifteen = React.lazy(() => import("pages/Fifteen"));
const Twelve = React.lazy(() => import("pages/Twelve"));
const Seven = React.lazy(() => import("pages/Seven"));
const Ten = React.lazy(() => import("pages/Ten"));
const Nineteen = React.lazy(() => import("pages/Nineteen"));
const InformationAboutTheTemplate = React.lazy(
  () => import("pages/InformationAboutTheTemplate"),
);
const Icons = React.lazy(() => import("pages/Icons"));
const TemplateGuide = React.lazy(() => import("pages/TemplateGuide"));
const SubscriptionPageLaptop = React.lazy(
  () => import("pages/SubscriptionPageLaptop"),
);
const SubscriptionPageDesktop = React.lazy(
  () => import("pages/SubscriptionPageDesktop"),
);
const SupportPageLaptop = React.lazy(() => import("pages/SupportPageLaptop"));
const SupportPageDesktop = React.lazy(() => import("pages/SupportPageDesktop"));
const ShowsPageOpenLaptop = React.lazy(
  () => import("pages/ShowsPageOpenLaptop"),
);
const ShowsPageOpenDesktop = React.lazy(
  () => import("pages/ShowsPageOpenDesktop"),
);
const MoviesPageOpenLaptop = React.lazy(
  () => import("pages/MoviesPageOpenLaptop"),
);
const MoviesPageOpenDesktop = React.lazy(
  () => import("pages/MoviesPageOpenDesktop"),
);
const MoviesShowsPageLaptop = React.lazy(
  () => import("pages/MoviesShowsPageLaptop"),
);
const MoviesShowsPageDesktop = React.lazy(
  () => import("pages/MoviesShowsPageDesktop"),
);
const HomePageLaptop = React.lazy(() => import("pages/HomePageLaptop"));
const HomePageDesktop = React.lazy(() => import("pages/HomePageDesktop"));
const Fourteen = React.lazy(() => import("pages/Fourteen"));
const Thirteen = React.lazy(() => import("pages/Thirteen"));
const Eleven = React.lazy(() => import("pages/Eleven"));
const Four = React.lazy(() => import("pages/Four"));
const Three = React.lazy(() => import("pages/Three"));
const Two = React.lazy(() => import("pages/Two"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
          <Route path="/four" element={<Four />} />
          <Route path="/eleven" element={<Eleven />} />
          <Route path="/thirteen" element={<Thirteen />} />
          <Route path="/fourteen" element={<Fourteen />} />
          <Route path="/homepagedesktop" element={<HomePageDesktop />} />
          <Route path="/homepagelaptop" element={<HomePageLaptop />} />
          <Route
            path="/moviesshowspagedesktop"
            element={<MoviesShowsPageDesktop />}
          />
          <Route
            path="/moviesshowspagelaptop"
            element={<MoviesShowsPageLaptop />}
          />
          <Route
            path="/moviespageopendesktop"
            element={<MoviesPageOpenDesktop />}
          />
          <Route
            path="/moviespageopenlaptop"
            element={<MoviesPageOpenLaptop />}
          />
          <Route
            path="/showspageopendesktop"
            element={<ShowsPageOpenDesktop />}
          />
          <Route
            path="/showspageopenlaptop"
            element={<ShowsPageOpenLaptop />}
          />
          <Route path="/supportpagedesktop" element={<SupportPageDesktop />} />
          <Route path="/supportpagelaptop" element={<SupportPageLaptop />} />
          <Route
            path="/subscriptionpagedesktop"
            element={<SubscriptionPageDesktop />}
          />
          <Route
            path="/subscriptionpagelaptop"
            element={<SubscriptionPageLaptop />}
          />
          <Route path="/templateguide" element={<TemplateGuide />} />
          <Route path="/icons" element={<Icons />} />
          <Route
            path="/informationaboutthetemplate"
            element={<InformationAboutTheTemplate />}
          />
          <Route path="/nineteen" element={<Nineteen />} />
          <Route path="/ten" element={<Ten />} />
          <Route path="/seven" element={<Seven />} />
          <Route path="/twelve" element={<Twelve />} />
          <Route path="/fifteen" element={<Fifteen />} />
          <Route path="/six" element={<Six />} />
          <Route path="/eight" element={<Eight />} />
          <Route path="/seventeen" element={<Seventeen />} />
          <Route path="/nine" element={<Nine />} />
          <Route path="/sixteen" element={<Sixteen />} />
          <Route path="/eighteen" element={<Eighteen />} />
          <Route path="/one" element={<One />} />
          <Route path="/five" element={<Five />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
