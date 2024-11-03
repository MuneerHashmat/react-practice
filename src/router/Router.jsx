import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../mini-tasks/Home";
import Accordion from "../mini-tasks/Accordion";
import BackgroundChanger from "../mini-tasks/BackgroundChanger";
import Pagination from "./../mini-tasks/Pagination";
import ChipInput from "../mini-tasks/ChipInput";
import Clock from "./../mini-tasks/Clock";
import DragAndDrop from "../mini-tasks/DragAndDrop";
import Dropdown from "./../mini-tasks/Dropdown";
import Quiz from "../mini-tasks/Quiz";
import MultiStepForm from "../mini-tasks/MultiStepForm";
import ImageGallery from "../mini-tasks/ImageGallery";
import ShoppingList from "./../mini-tasks/ShoppingList";
import Stepper from "../mini-tasks/Stepper";
import StringTransform from "./../mini-tasks/StringTransform";
import Tab from "./../mini-tasks/Tab";
import TableColor from "../mini-tasks/TableColor";
import TrafficLights from "./../mini-tasks/TrafficLights";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/accordion" element=<Accordion /> />
        <Route path="/background-changer" element=<BackgroundChanger /> />
        <Route path="/chip-input" element=<ChipInput /> />
        <Route path="/clock" element=<Clock /> />
        <Route path="/drag-and-drop" element=<DragAndDrop /> />
        <Route path="/dropdown" element=<Dropdown /> />
        <Route path="image-gallery" element=<ImageGallery /> />
        <Route path="/multi-step-form" element=<MultiStepForm /> />
        <Route path="/pagination" element=<Pagination /> />
        <Route path="/quiz" element=<Quiz /> />
        <Route path="/shopping-list" element=<ShoppingList /> />
        <Route path="/stepper" element=<Stepper /> />
        <Route path="/string-transform" element=<StringTransform /> />
        <Route path="/tab" element=<Tab /> />
        <Route path="/table-color" element=<TableColor /> />
        <Route path="/traffic-lights" element=<TrafficLights /> />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
