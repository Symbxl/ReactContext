import React from 'react'
import { createContext,useMemo, useState, useContext } from 'react'

const NightModeContext = createContext()

NightModeContext.displayName = 'NightModeContext'

export const useNightMode = () => {
  const context = useContext(NightModeContext)
  if (context === undefined) {
    throw new Error('useNightMode must be used within a NightModeProvider')       }
  return context
}
const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false)
  const nightModeObject = useMemo(() => {
    return { nightMode, setNightMode }
  }, [nightMode, setNightMode])
return (
<NightModeContext.Provider value={nightModeObject}>
  {children}  
</NightModeContext.Provider>
)
}
export default NightModeProvider