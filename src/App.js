import React from 'react';
const friends = [
  {
    id:1,
    name : "ChoiJaeHawn",
    image:"/images/choi.jpg"
  },
  {
    id:2,
    name : "KangDongWon",
    image:"/images/dongwon.jpg"
  }
];
function FriendList({name,image}){
  return (
  <div>
    <h2>Friend name is {name}</h2>
    <img src={image} alt="" />
  </div>);

}
function App() {
  return (
  <div className="App">
    {friends.map(friend => (
      <FriendList key={friend.id}name={friend.name} image={friend.image} />
    ))}
  </div>
  );
      
}

export default App;
