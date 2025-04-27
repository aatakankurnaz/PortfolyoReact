import { Form } from "react-bootstrap"

export const DarkModeAndLanguage = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-end items-center text-sm sm:text-base">
      <Form>
        <div className="flex items-center gap-2 sm:gap-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            className="m-0 scale-125 sm:scale-150"
            defaultChecked
          />
          <label
            htmlFor="custom-switch"
            className="form-check-label inter text-[#777777] font-bold tracking-widest"
          >
            DARK MODE
          </label>
        </div>
      </Form>

      <span className="inter text-[#777777] font-bold hidden sm:inline">
        |
      </span>

      <div className="flex items-center gap-1">
        <button className="inter font-bold text-[#4731D3] tracking-widest text-sm sm:text-base">
          TÜRKÇE
        </button>
        <span className="inter text-[#777777] font-bold leading-[90%] tracking-widest text-sm sm:text-base">
          'YE GEÇ
        </span>
      </div>
    </div>
  )
}
