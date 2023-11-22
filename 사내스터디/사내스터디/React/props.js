/*

부모에서 설정한 임의'값'을 자식으로 넘기는 방법 

function App() {
  return (
    <div>
      // name 값을 설정함
      <Welcome name="Sara" /> //컴포넌트 의 네임값은 사라 
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// 웰컴이라는 컴포넌트에서 '부모' app 의 네임 '값' 을 받아옴

*/
