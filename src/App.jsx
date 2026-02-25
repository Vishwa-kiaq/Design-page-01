import LeadCard from "./components/cards/LeadCard"
import Header from "./components/layout/Header"
import StatCard from "./components/stats/StatCard"
import { stats , leads } from "./data/EmpData"


function App() {
  return (
    <>
    <Header/>
    <div className="max-w-5xl mx-auto ">
    
      <div className="flex gap-3 mb-6">
        {stats.map((stat, index)=>(
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="space-y-4">
        {leads.map((lead , index)=>(
          <LeadCard key={index} lead={lead} />
        ))}
      </div>
    </div>

    </>
  )
}

export default App
