import ErrorBoundary from "@/components/ErrorBoundary";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Articles from "@/pages/Articles";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import { Route, Switch } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicos" component={Services} />
      <Route path="/equipe" component={Team} />
      <Route path="/artigos" component={Articles} />
      <Route path="/sobre" component={About} />
      <Route path="/eventos" component={Events} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}
