import MyButton from "./MyButton";
import Gallery, { Imagen } from "./Gallery.js";
import Profile from "./Profile";
import ListaConTitulo from "./Lista";
import Bio from "./Bio";
import TodoList from "./Todo";
import AvatarProfiles from "./Avatar";
import ChildrenProfile from "./Children";

export default function Home() {
  return (
    <>
      <h1>Hola mundo</h1>

      <MyButton />
      <MyButton />
      <Gallery />
      <Profile />
      <ListaConTitulo />
      <Imagen />
      <Bio />
      <TodoList />
      <AvatarProfiles />
      <ChildrenProfile />
    </>
  );
}