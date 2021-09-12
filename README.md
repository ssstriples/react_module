# react_module

## React & Redux

### 1. React 개발 환경 설정
- npx create-react-app [project명]
```
사용 예시)
npx create-react-app study
```
- VS Code Extenstion Install
```
- ES7 React/Redux/GraphQL/React-Native snippets
- Prettier - Code formatter
```
- Chrome Dev Tool
```
- React Developer Tools
```

```
Todo !!
npx vs npm
```

---

### 2. 필수 ES6 문법
- ECMA Script
    - UI Rendering

```
1. JSX : JavaScript + XML 
- JavaScript에 HTML을 넣음으로써 모든 것을 Component화 
    -> 독립성 보장
    -> 재사용 가능

2. class vs className
- class : 일반적인 HTML TAG class 
- className : React를 위한 JSX문법에서만 사용되는 별도의 Naming Convention
```
```
3. Map을 이용한 Data Rendering
const data = [
  {
    title : 'Node',
    value : 0
  },
  {
    title : 'React',
    vlaue : 1
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          data.map( item => (
            <>
            <p key={item.value}>{item.title}, {item.value}</p>
            </>
          ))
        }
      </header>
    </div>
  );
}
```

---

### 3. React 소개
- React 장점
```
1. Virtual DOM
- DOM(Document Object Model)
- SPA(Single Page Application) : Page가 바뀌지 않고 현재 페이지에서 모든 데이터의 변환, 처리, 이동이 이루어질 수 있는 App 
    -> 전체 DOM 객체가 다시 Rendering 없이 필요한 부분만 Update

2. Only View, NO MVC(feat. 단방향 데이터 흐름)
- MVC(Model View controller)

3. Reusable Components
- Library : React는 라이브러리(최소한의 기능을 제공)
    -> 굉장히 빠르고, 모든 것을 View로 보는 UI Library
- Framework : Angular는 프레임워크(자체적으로 굉장히 많은 기능을 제공)
- React는 Component기반의 라이브러리

4. Hot reloading
- Page 새로고침 없이 수정된 결과를 바로 확인 가능

5. Server Side Rendering(feat. SEO)
- 기존의 SPA가 갖는 검색엔진최적화(SEO) 문제를 해결할 수 있음
- 일반적으로 Client단에서 Rendering하지만 Back-End(NodeJS)단에서 Rendering하는 것이 SSR!
```
---

### 4. React 구조와 원리 : JSX와 Fragment
- JSX와 Fragment
```
camelCase 사용

props : 표현하고자 하는 data를 props에 임의로 naming하여 전달

Fragment : <></> block안에 아무것도 정의하지 않은 요소
- 여러 Components를 하나의 wrapper로 감싸서 Return하기 위함
```
```
const Head = props => <h1>{props.title} {props.name}</h1>

function App() {
  return (
    <>
      <Head title="this is a title" name="this is a name"/>
      <Head title="this is a title" name="this is a name"/>
    </>
  );
}
```
---

### 5. React 구조와 원리 : Rendering
- Rendering
```
조건별 Rendering 제어
```
```
const Loading = () => <div>Loading...</div>

class LoadingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : false
    }
  }

  comment () {
    const con = 1
    const res = con > 0 ? true : false
    const and = loading && (<div>loading...</div>)
  }

  render() {
    const { loading } = this.state
    return (
      <>
        {
          loading && <Loading />
        }
      </>
    )
  }
}
```
---

### 6. React 구조와 원리 : Lifecycle
- Lifecycle
```
단방향을 보장하면서 데이터를 단일적으로 관리하기 위한 로직 마련
```
```
class LifeCycle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {  // setState사용X
    return (<></>)
  }

  componentDidMount() {

  }

  componentWillUnmount() {  // setState사용X

  }
}
```
---

### 7. React 구조와 원리 : Props vs State
- Props vs State
```

```







