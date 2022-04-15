import { useState } from 'react'

export const useWindow = (initialOpen = false) => {
	const [isOpen, setIsOpen] = useState(initialOpen)
	
	const openWindow = (isOpen) => setIsOpen(isOpen)
	
	return [isOpen, openWindow]
}
