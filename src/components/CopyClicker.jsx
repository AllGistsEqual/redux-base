import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CopyClicker = (props) => {
    const { initialCopies, initialCpC } = props

    const onCopyClicked = () => {
        // ToDo: write some code
    }

    const onImproveCopy = () => {
        // ToDo: write some code
    }

    return (
        <div>
            <button type="button" className="theCopy" onClick={onCopyClicked}>
                <span role="img" aria-label="ClickThatCopy">💾</span>
            </button>

            <h2>CLICK THE COPY!</h2>

            <p>
                <span role="img" aria-label="copies">
                    {`💾: ${copies} copies`}
                </span>
            </p>

            <button type="button" onClick={onImproveCopy}>
                {`Upgrade ClicksPerCopy for ${CpC * CpC + 1} copies`}
            </button>

            <p title="copies per click">
                {`CpC: ${CpC}`}
            </p>
        </div>
    )
}

CopyClicker.propTypes = {
    initialCopies: PropTypes.number.isRequired,
    initialCpC: PropTypes.number.isRequired,
}

export default CopyClicker
