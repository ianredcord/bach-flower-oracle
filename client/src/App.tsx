import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Encyclopedia from "./pages/Encyclopedia";
import History from "./pages/History";
import Systems from "./pages/Systems";
import Acupuncture from "./pages/Acupuncture";
import EssentialOil from "./pages/EssentialOil";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/encyclopedia"} component={Encyclopedia} />
      <Route path={"/history"} component={History} />
      <Route path={"/systems"} component={Systems} />
      <Route path={"/acupuncture"} component={Acupuncture} />
      <Route path={"/essential-oil"} component={EssentialOil} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
