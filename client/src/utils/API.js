// Fetch Request Examples
export const getExampleAPI = (accountNum) => {
  return fetch(`/api/GetExample/${accountNum}`, {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
    },
  });
};

export const setExampleAPI = (accountNum, data) => {
  return fetch(`/api/SetExample/${accountNum}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getUsers = () => {
  return fetch(`/api/users`, {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
    },
  });
};

export const getTickets = () => {
  return fetch(`/api/ticket`, {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
    },
  });
};

export const getRolodex = () => {
  return fetch(`/api/rolodex`, {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
    },
  });
};