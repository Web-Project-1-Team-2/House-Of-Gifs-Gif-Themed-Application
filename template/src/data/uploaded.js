let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploaded = (gifId) => {
  if (uploaded.find(id => id === gifId)) {
    return;
  }

  uploaded.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const removeUploaded = (gifId) => {
  uploaded = uploaded.filter(id => id !== gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

export const getuploaded = () => [...uploaded];