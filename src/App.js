import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache} from 
'@apollo/client';

import Header from "./components/Header";
import FlashCard from './pages/FlashCard';
import Dashboard from './pages/Dashboard';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allCards: {
          merge(existing, incoming) {
            return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/',
  cache
})

function App() {
  
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FlashCard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;