const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getStorageItem = (key, defaultValue) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  } catch {
    return defaultValue;
  }
};

const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const apiService = {
  auth: {
    login: async (studentId, password) => {
      await delay(400); // 네트워크 지연 시뮬레이션
      const users = getStorageItem("users", []);
      const foundUser = users.find(
        (u) => u.studentId === studentId.trim() && u.password === password.trim()
      );
      if (foundUser) {
        setStorageItem("currentUser", foundUser);
        return foundUser;
      }
      throw new Error("학번 또는 비밀번호가 올바르지 않습니다.");
    },

    register: async (userData) => {
      await delay(400);
      const { studentId, password, isPresident, isVicePresident } = userData;
      const users = getStorageItem("users", []);

      if (users.some((u) => u.studentId === studentId.trim())) {
        throw new Error("이미 등록된 학번입니다.");
      }

      const newUser = {
        studentId: studentId.trim(),
        password: password.trim(),
        isLeader: isPresident || isVicePresident,
        isPresident,
        isVicePresident,
      };

      users.push(newUser);
      setStorageItem("users", users);
      return newUser;
    },

    logout: async () => {
      await delay(200);
      localStorage.removeItem("currentUser");
      return true;
    },

    getCurrentUser: () => {
      return getStorageItem("currentUser", null);
    },
  },

  notices: {
    getAll: async () => {
      await delay(300);
      return getStorageItem("notices", []);
    },

    create: async (noticeData) => {
      await delay(400);
      const { title, content, imageUrl, d_day } = noticeData;
      const stored = getStorageItem("notices", []);
      const newNotice = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: new Date().toLocaleDateString("ko-KR").replace(/\s/g, "").slice(0, -1),
        d_day: d_day || "5",
        imageUrl: imageUrl || "",
      };
      stored.unshift(newNotice);
      setStorageItem("notices", stored);
      return newNotice;
    },

    delete: async (id) => {
      await delay(300);
      const stored = getStorageItem("notices", []);
      const updated = stored.filter((item) => item.id !== id);
      setStorageItem("notices", updated);
      return true;
    },
  },

  suggestions: {
    getAll: async () => {
      await delay(300);
      return getStorageItem("suggestions", []);
    },

    create: async (sugData, authorId) => {
      await delay(400);
      const { title, content } = sugData;
      const stored = getStorageItem("suggestions", []);
      const newSuggestion = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        answer: "",
        date: new Date().toLocaleDateString("ko-KR").replace(/\s/g, "").slice(0, -1),
        authorId: authorId || "1234",
      };
      stored.push(newSuggestion);
      setStorageItem("suggestions", stored);
      return newSuggestion;
    },

    updateAnswer: async (id, answer) => {
      await delay(300);
      const stored = getStorageItem("suggestions", []);
      const updated = stored.map((s) =>
        s.id === id ? { ...s, answer: answer.trim() } : s
      );
      setStorageItem("suggestions", updated);
      return updated.find((s) => s.id === id);
    },

    delete: async (id) => {
      await delay(300);
      const stored = getStorageItem("suggestions", []);
      const updated = stored.filter((item) => item.id !== id);
      setStorageItem("suggestions", updated);
      return true;
    },
  },
};
