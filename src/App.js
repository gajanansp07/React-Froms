import './App.css';
import ComponentC from './UserContaxt/ComponentC';
import { UserProvider } from './UserContaxt/UserContaxt';
// import ErrorBoundary from './componants/ErrorBoundary';
// import HeroErrorH from './componants/HeroErrorH';
// import FocusInput from './Ref_Component/FocusInput';
// import FRparentInput from './Ref_Component/FRparentInput';
// import Parent_Componant from './Memo-Componant/Parent_Componant';
// import RefsDemo from './Ref_Component/RefsDemo';
// import ParentCom from './Pure_Componants/ParentCom';
// import PureComp from './Pure_Componants/PureComp';
// import GreetingHook from './componants/GreetingHook';
// import IntroducingHooks from './componants/IntroducingHooks';
// import PortalDemo from './componants/PortalDemo'
// import ClickCounter from './higherOrderComponent/ClickCounter';
// import ClickCounterTwo from './higherOrderComponent/ClickCounterTwo';
// import Counter from './higherOrderComponent/Counter';
// import HoverCounterTwo from './higherOrderComponent/HoverCounterTwo';
// import User from './higherOrderComponent/User';
// import HoverCounter from './higherOrderComponent/HoverCounter';
// import Forms from './componants/Forms';
// import LifeCycleA from './componants/LifeCycleA';
// import Rendering_a_Component from './Pure_Componants/Rendering_a_Component'
function App() {
  return (
    <div className="App">
      <UserProvider value="Ganesh">
        <ComponentC />
      </UserProvider>
      
      {/* <IntroducingHooks /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <HeroErrorH heroName="Mahesh" />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrorH heroName="Ganesh" />
      </ErrorBoundary>
      <ErrorBoundary>
        <HeroErrorH heroName="Joker" />
      </ErrorBoundary> */}
      
      {/* <ClickCounter name = "Gajanan " />
      <HoverCounter name="Ganesh " />
       */}
       {/* <ClickCounterTwo />
       <HoverCounterTwo />
       <User render ={(isLoggedIn) => isLoggedIn ? "Ganesh": "Guest" } /> */}
       {/* <Counter render={(count, incrementCount) => (<ClickCounterTwo 
       count={count} 
       incrementCount={incrementCount}  />)
      }/> */}
      {/* <Counter>
      {(count, incrementCount) => (<ClickCounterTwo 
       count={count} 
       incrementCount={incrementCount}  />)
      }
      </Counter> */}
       {/* <Counter render={(count, incrementCount) => 
       (<HoverCounterTwo 
       count={count}
       incrementCount={incrementCount}
       />)
      }/> */}
      {/* <Counter>
      {(count, incrementCount) => 
       (<HoverCounterTwo 
       count={count}
       incrementCount={incrementCount}
       />)
      }
      </Counter> */}

      
      {/* <IntroducingHooks /> */}
      {/* <GreetingHook /> */}
      {/* <LifeCycleA /> */}
      {/* <Forms /> */}
      {/* <Rendering_a_Component /> */}
      {/* <ParentCom /> */}
      {/* <Parent_Componant /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRparentInput /> */}
      
    </div>
  );
}

export default App;
