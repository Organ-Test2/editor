import React from 'react'

import input from '../../config/input'
import colors from '../../config/colors'
import { margins } from '../../config/scales'

class BooleanField extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.bool,
    doc: React.PropTypes.string,
    style: React.PropTypes.object,
  }

  render() {
    const styles = {
			root: {
        ...input.base,
        padding: 0,
				position: 'relative',
        textAlign: 'center ',
				cursor: 'pointer'
			},
			input: {
				position: 'absolute',
				zIndex: -1,
				opacity: 0
			},
			box: {
				display: 'inline-block',
        textAlign: 'center ',
        height: 15,
        width: 15,
				marginRight: margins[1],
				marginBottom: null,
				backgroundColor: colors.gray,
				borderRadius: 2,
				borderStyle: 'solid',
				borderWidth: 2,
				borderColor: colors.gray,
				transition: 'background-color .1s ease-out'
			},
			icon: {
				display: this.props.value ? null : 'none',
				width: '75%',
				height: '75%',
				marginTop: 1,
				fill: colors.lowgray
			}
    }

		return <label style={styles.root}>
      <input
				type="checkbox"
				style={{
          ...styles.input,
					...this.props.style,
				}}
				value={this.props.value}
				onChange={e => {this.props.onChange(!this.props.value)}}
				checked={this.props.value}
			/>
      <div style={styles.box}>
        <svg
          viewBox='0 0 32 32'
          style={styles.icon}>
          <path d='M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z' />
        </svg>
		  </div>
		</label>
  }
}

export default BooleanField