import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/Projects.css';
import '../styles/Gist.css';

function CustomGist({ gistId }) {
  const [gistData, setGistData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGist = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/gists/${gistId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGistData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching gist:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGist();
  }, [gistId]);

  if (loading) {
    return <div className="gist-loading">Loading gist...</div>;
  }

  if (error) {
    return <div className="gist-error">Error loading gist: {error}</div>;
  }

  if (!gistData) {
    return <div className="gist-error">No gist data found</div>;
  }

  return (
    <div className="custom-gist">
      <div className="gist-header">
        <h3 className="gist-title">{gistData.description || 'Untitled Gist'}</h3>
        <a 
          href={gistData.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="gist-link"
        >
          View on GitHub
        </a>
      </div>
      <div className="gist-files">
        {Object.entries(gistData.files).map(([filename, file]) => (
          <div key={filename} className="gist-file">
            <div className="file-header">
              <span className="file-name">{filename}</span>
              <span className="file-size">{file.size} bytes</span>
            </div>
            <div className="file-content">
              <SyntaxHighlighter
                language={file.language?.toLowerCase() || 'text'}
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: '16px',
                  maxHeight: '400px',
                  overflow: 'auto',
                  fontSize: '12px',
                  lineHeight: '1.45',
                  background: '#000000'
                }}
                codeTagProps={{
                  style: {
                    fontFamily: "'SFMono-Regular', 'Monaco', 'Inconsolata', 'Liberation Mono', 'Courier New', monospace"
                  }
                }}
              >
                {file.content}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </div>
      <div className="gist-footer">
        <span className="gist-author">By: {gistData.owner?.login || 'Unknown'}</span>
        <span className="gist-date">
          Created: {new Date(gistData.created_at).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}

function Project1() {
  return (
    <div id="project1" className="project-container">
      <h2 className="project-title">Discord and GroupMe Cross Connect</h2>
      <p className="project-text">
        This project is a JavaScript application that connects Discord and GroupMe via their APIs.
        A user can send messages in either platform and have them appear in the other platform in real-time.
        Image transfer in this project was a difficult challenge to overcome. In order to send images from Discord to GroupMe,
        I had to download the image from Discord's CDN and then re-upload it to GroupMe's image hosting service before sending the message.
      </p>
      <div className="gist-container">
        <CustomGist gistId="8fa6526752c9270fcad9161c00f6372e" />
      </div>
    </div>
  );
}

export default Project1;