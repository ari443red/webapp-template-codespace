import { useState } from 'react'

function App() {
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')

  const priceNum = parseFloat(price) || 0
  const discountNum = parseFloat(discount) || 0

  const discountAmount = priceNum * (discountNum / 100)
  const finalPrice = priceNum - discountAmount

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-6">
      <h1 className="text-4xl font-bold tracking-tight">Discount Calculator</h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        {/* Original Price */}
        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            Original Price
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 w-full text-lg font-mono outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Discount Percentage */}
        <div>
          <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
            Discount %
          </label>
          <input
            type="number"
            inputMode="decimal"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="0"
            className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 w-full text-lg font-mono outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>
      </div>

      {/* Results */}
      <div className="rounded-xl bg-white dark:bg-slate-800 shadow p-6 w-full max-w-sm text-left space-y-2">
        <div className="text-sm text-slate-500 dark:text-slate-400">Results</div>
        <div className="border-t border-slate-200 dark:border-slate-600 pt-2" />
        <div className="flex justify-between">
          <span className="text-slate-600 dark:text-slate-400">Discount</span>
          <span className="font-mono text-green-600 font-medium">
            $ {discountAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-slate-600 dark:text-slate-400">You Pay</span>
          <span className="font-mono text-lg text-indigo-600 font-bold">
            $ {finalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </main>
  )
}

export default App