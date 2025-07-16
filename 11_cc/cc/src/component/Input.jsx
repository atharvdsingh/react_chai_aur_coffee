import { useActionState, useId } from "react";
import React   from 'react'

function InputBox({
    label,
    amout,
    onAmountChange,
    onCurrencyChange,
    selectCurency,
    currencyOption=[],
    setCurency="usd",
    amoutDisable=false,
    curencyDisable=false,
    className=""

}) {
    const uniqueID=useActionState()
    return (
        <div className={`bg-green-600 p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor={uniqueID}>
                    {label}
                </label>
                <input
                    ud={uniqueID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amoutDisable}
                    value={amout}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currencyOption.map((currency)=>{
                        <option key={currency} value={currency}>
                            {currency}

                        </option>
                        })
                    }
                        


                
                </select>
            </div>
        </div>
    );
}

export default InputBox;