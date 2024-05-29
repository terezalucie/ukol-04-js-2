import './cancel.css'

export const Cancel = ({titleCancel, cancelText14, cancelText0 }) => {
    return(
        <div className="summary__cancal">
            <h3>{titleCancel}</h3>
        <div className="summary__cancel-text">
          <p>
            {cancelText14}
          </p>
          <p>
            {cancelText0}
          </p>
        </div>
      </div>
    )
}