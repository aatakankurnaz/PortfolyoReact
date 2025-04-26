import { Form } from "react-bootstrap"

export const DarkModeAndLanguage = () => {
    return (
        <div className="flex gap-3 justify-end items-center">
            <Form>
                <div className="flex items-center gap-2">
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        className="m-0 scale-150"
                        defaultChecked
                    />
                    <label
                        htmlFor="custom-switch"
                        className="form-check-label inter text-[#777777] font-bold text-[15px] leading-[100%] tracking-widest"
                    >
                        DARK MODE
                    </label>
                </div>
            </Form>


            {/* Orta çizgi */}
            <span className="inter text-[#777777] font-bold text-[15px]">
                |
            </span>

            {/* Dil değişimi */}
            <div className="flex items-center gap-1">
                <button className="inter font-bold !text-[15px] tracking-widest text-[#4731D3]">
                    TÜRKÇE
                </button>
                <span className="inter text-[#777777] font-bold text-[15px] leading-[90%] tracking-widest">
                    'YE GEÇ
                </span>
            </div>
        </div>
    )
}
