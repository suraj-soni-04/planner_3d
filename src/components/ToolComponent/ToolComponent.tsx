import React from 'react';
import './ToolComponent.css';

interface ToolComponentProps {
  setActiveComponent: (component: string) => void;
}

const ToolComponent: React.FC<ToolComponentProps> = ({ setActiveComponent }) => {
  return (
    <div className="rectangle-section section2">
      <div className="button-row">
        <button className="tool-button">
          <img src="https://5.imimg.com/data5/XL/WQ/MY-1096282/wooden-school-chair-1000x1000.jpg" alt="sdsd" />
        </button>
        <button className="tool-button">
          <img src="https://m.media-amazon.com/images/I/312nrp468XL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src="https://www.furniturewallet.com/media/catalog/product/cache/23/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/0/5/05_14.jpg" alt="" />
        </button>
        <button className="tool-button">
          <img src="https://www.ikea.com/in/en/images/products/idasen-table-brown-beige__0932308_pe791407_s5.jpg?f=xl" alt="Button 4" />
        </button>
      </div>
      <div className="button-row">
        <button className="tool-button">
          <img src="https://shop.gkwretail.com/cdn/shop/products/Designer-Sofa-Set-in-Fabric-L-Shape_2.png?v=1651899140&width=713" alt="Button 5" />
        </button>
        <button className="tool-button">
          <img src="https://caspianfurniture.com/cdn/shop/files/1_c63a883a-9d5f-449c-b391-d7061af21133.jpg?v=1685525263" alt="Button 6" />
        </button>
      </div>
      <div style={{ marginBottom: '210px' }}></div>
      <button onClick={() => setActiveComponent('Preview')} className="save-button">
        SAVE
      </button>
    </div>
  );
};

export default ToolComponent;
