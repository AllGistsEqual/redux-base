import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CopyClicker = (props) => {
    const { copies, CpC } = props

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
    copies: PropTypes.number.isRequired,
    CpC: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
    copies: state.copies,
})

export default connect(mapStateToProps)(CopyClicker)
