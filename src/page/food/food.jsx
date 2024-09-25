import { Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

function FoodPage() {

  const [form] = useForm();
  const [isOpen, setIsOpen] = useState(false); 

  return (
  <div className="Container Food">
    Food Calculator
    <div className="Food_modal">
      <Modal></Modal>
    </div>
  </div>

  );
}

export default FoodPage;
