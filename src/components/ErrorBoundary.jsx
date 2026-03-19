import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('PMA render error:', error, errorInfo)
    document.body.dataset.appReady = 'false'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0f1115] px-4 py-12 text-[#f5f7fa]">
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c46f2d]">PMA</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight">La aplicación tuvo un problema al renderizar.</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#97a1ad]">
              Se mantuvo el respaldo visual para evitar una pantalla en blanco. Revise la consola del navegador para el detalle técnico del error.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
