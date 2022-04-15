//Iconos
import { useState } from "react";
import {
  MdCropDin,
  MdPanoramaFishEye,
  MdEdit,
  MdClear,
  MdFormatColorFill,
  MdTitle,
  MdPanTool,
  MdZoomIn,
  MdZoomOut,
} from "react-icons/md";

const initialTools = [
  {
		id: 'tool-1',
    name: "Rect",
    icon: MdCropDin,
  },
  {
		id: 'tool-2',
    name: "Circle",
    icon: MdPanoramaFishEye,
  },
  {
		id: 'tool-3',
    name: "Draw",
    icon: MdEdit,
  },
  {
		id: 'tool-4',
    name: "Eraser",
    icon: MdClear,
  },
	{
		id: 'tool-5',
    name: "ColorFill",
    icon: MdFormatColorFill,
  },
	{
		id: 'tool-6',
    name: "Text",
    icon: MdTitle,
  },
	{
		id: 'tool-7',
    name: "HandMove",
    icon: MdPanTool
  },
	{
		id: 'tool-8',
    name: "ZoomIn",
    icon: MdZoomIn
  },
	{
		id: 'tool-9',
    name: "ZoomOut",
    icon: MdZoomOut
  }
];

export const useTools = (name) => {
	const [tools] = useState(initialTools)
	
	return (name) ? tools.find(t => t.name === name) : tools
}