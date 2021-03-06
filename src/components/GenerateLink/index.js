import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';

const PERSONAL = 1;
const ALL = 2;
const HOSTNAME = 'https://invitato.net/wedding-annas-pelangi';

function GenerateLink() {
  const [type, setType] = useState(PERSONAL);
  const [name, setName] = useState();
  const [showResult, setShowResult] = useState(false);
  const [successCopy, setSuccessCopy] = useState(false);

  const { data, loading } = useGuestData();

  const URL = `${HOSTNAME}?to=${encodeURIComponent(name)}`;

  const handleChange = (e) => {
    setType(parseInt(e.target.value, 10));
    setShowResult(false);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleCopy = async (text, showAlert = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopy(true);
      showAlert && alert('URL Berhasil disalin di clipboard');
    } catch (err) {
      setSuccessCopy(false);
      alert('Failed to copy! :(');
    }
  };

  const renderContentType = () => {
    if (type === PERSONAL) {
      return (
        <Fragment>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama Tamu</label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              placeholder="Nama tamu.."
            ></input>
          </div>
          <button
            type="submit"
            class="btn"
            style={{ backgroundColor: 'var(--font-primary)', border: 'none', color: 'white' }}
            onClick={() => setShowResult(true)}
          >
            Generate Link
          </button>
        </Fragment>
      );
    }

    if (type === ALL) {
      return (
        <Fragment>
          <button
            type="submit"
            class="btn"
            style={{ backgroundColor: 'var(--font-primary)', border: 'none', color: 'white' }}
            onClick={() => setShowResult(true)}
          >
            Generate Link
          </button>
        </Fragment>
      );
    }
  };

  const renderResult = () => {
    if (!showResult) return null;

    if (type === PERSONAL) {
      return (
        <div className="col-md-4 col-md-offset-4">
          <div class="alert alert-success" role="alert" style={{ marginTop: '20px' }}>
            <strong>Berhasil!</strong> <br />
            <a href={URL} target="_blank" rel="noreferrer" style={{ color: 'green', textDecoration: 'underline' }}>
              {URL}
            </a>
            <button
              type="button"
              className="btn btn-default btn-xs"
              style={{ marginLeft: '8px' }}
              onClick={() => handleCopy(URL)}
            >
              {successCopy ? 'Tersalin' : 'Salin'}
            </button>
          </div>
        </div>
      );
    }

    if (type === ALL) {
      return (
        <div className="col-md-10 col-md-offset-1" style={{ marginTop: '28px' }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => {
                  const offlineInvitation = '';
                  const mapURL = `${HOSTNAME}?to=${encodeURIComponent(d.name)}${offlineInvitation}`;
                  return (
                    <tr>
                      <td>{d.name}</td>
                      <td>
                        <a
                          href={mapURL}
                          target="_blank"
                          rel="noreferrer"
                          style={{ textDecoration: 'underline' }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleCopy(mapURL, true);
                          }}
                        >
                          {mapURL}
                        </a>
                        <button
                          className="btn btn-default btn-sm"
                          style={{
                            fontSize: '12px',
                            padding: '4px 8px',
                            marginLeft: '4px',
                          }}
                          onClick={() => handleCopy(mapURL, true)}
                        >
                          copy
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <h2 className="title">Generator of Link Invitation</h2>
      <h3 className="title__sub">Annas & Pelangi</h3>

      {loading && <h4 style={{ textAlign: 'center' }}>Memuat data..</h4>}

      {!loading && (
        <Fragment>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div class="form-group">
                <label for="exampleInputEmail1">Tipe Link</label>
                <select class="form-control" value={type} onChange={handleChange}>
                  <option value={PERSONAL}>Individu</option>
                  <option value={ALL}>Semua Undangan</option>
                </select>
              </div>
              {renderContentType()}
            </div>
          </div>
          <div className="row">{renderResult()}</div>
        </Fragment>
      )}
    </div>
  );
}

export default GenerateLink;
