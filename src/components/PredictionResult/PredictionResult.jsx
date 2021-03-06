import React from 'react'
import './PredictionResult.css'

function PredictionResult({ predictions}) {
  const renderResult = predictions => {
    if (predictions[0].probability > 0.5) {
      return (
        <article className="predictions">
          <h2 className="predictions-heading">Teachable Machine Model</h2>
          <h3>AJUSTES</h3>
          <h4>Epocas = 50</h4>
          <h4>Tamanio de Lote = 16</h4>
          <h4>Tasa de Aprendizaje = 0,001</h4>
          <center><h3>{predictions[0].className}</h3></center>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${(predictions[0].probability * 100).toFixed(2)}%`
              }}
              aria-valuenow={(predictions[0].probability * 100).toFixed(2)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(predictions[0].probability * 100).toFixed(2).replace('.', ',')}{' '}
              %
            </div>
          </div>
          <center><h3>{predictions[1].className}</h3></center>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${(predictions[1].probability * 100).toFixed(2)}%`
              }}
              aria-valuenow={(predictions[1].probability * 100).toFixed(2)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {(predictions[1].probability * 100).toFixed(2).replace('.', ',')}{' '}
              %
            </div>
          </div>
        </article>
      )
    } else {
      return (
        <p className="alert is-warning">
          Nos fue imposible identificar esta imagen
        </p>
      )
    }
  }
  return renderResult(predictions)
}

export default PredictionResult