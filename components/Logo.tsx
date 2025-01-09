import { Dot } from 'lucide-react'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <div className="text-2xl font-semibold tracking-tight flex items-center">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Sonnytech Academy</span>
                <span className="text-white/30 text-lg">
                    <Dot className="w-4 h-4" />
                </span>
                <span className="text-white/80">labs</span>
            </div>
        </div>
    )
}

export default Logo