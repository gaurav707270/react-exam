import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Users() {
  const [allUser, setAllUser] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const searchRef = useRef(null);

  const studentNameRef = useRef(null);
  const studentGradeRef = useRef(null);
  const studentSubjectRef = useRef(null);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/allStudentData"
      );

      setAllUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMe = () => {
    try {
      const result = localStorage.getItem("currentUser");

      if (result) {
        const user = JSON.parse(result);
        setCurrentUser(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const postNewUserData = async (newUser) => {
    try {
      await axios.post(
        "http://localhost:3000/allStudentData",
        newUser
      );

      fetchUserData();

      studentNameRef.current.value = "";
      studentGradeRef.current.value = "";
      studentSubjectRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmite = () => {
    const newUser = {
      name: studentNameRef.current.value,
      grade: studentGradeRef.current.value,
      subject: studentSubjectRef.current.value,
    };

    postNewUserData(newUser);
  };

  const removeUser = async (user) => {
    try {
      await axios.delete(
        `http://localhost:3000/allStudentData/${user.id}`
      );

      fetchUserData();
    } catch (err) {
      console.log(err);
    }
  };

  const editUser = (user) => {
    setEditId(user.id);
    setIsUpdate(true);

    studentNameRef.current.value = user.name;
    studentGradeRef.current.value = user.grade;
    studentSubjectRef.current.value = user.subject;
  };

  const putUserData = async () => {
    const updatedUser = {
      name: studentNameRef.current.value,
      grade: studentGradeRef.current.value,
      subject: studentSubjectRef.current.value,
    };

    try {
      await axios.put(
        `http://localhost:3000/allStudentData/${editId}`,
        updatedUser
      );

      fetchUserData();

      studentNameRef.current.value = "";
      studentGradeRef.current.value = "";
      studentSubjectRef.current.value = "";

      setEditId(null);
      setIsUpdate(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    const searchValue = searchRef.current.value.toLowerCase();

    const result = allUser.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );

    setAllUser(result);
  };

  useEffect(() => {
    fetchUserData();
    getMe();
  }, []);

  return (
    <div className="container-fluid bg-dark min-vh-100 p-3">

      <div className="container mb-4">
        <div className="d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center text-white">
            <div
              className="rounded-circle bg-light text-dark d-flex justify-content-center align-items-center me-3"
              style={{
                width: "60px",
                height: "60px",
                fontSize: "25px",
              }}
            >
              {currentUser?.email
                ? currentUser.email.charAt(0).toUpperCase()
                : "U"}
            </div>

            <div>
              <h5 className="mb-1">
                {currentUser?.userName || "User"}
              </h5>

              <small>
                {currentUser?.email || ""}
              </small>
            </div>
          </div>

          <div className="d-flex">
            <input
              ref={searchRef}
              type="text"
              className="form-control"
              placeholder="Search user"
            />

            <button
              className="btn btn-primary ms-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center fw-bold text-white py-3">
        {isUpdate ? "Update Student" : "Add New Student"}
      </h2>

      <div className="container">
        <form
          className="bg-light p-3 rounded-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="row g-3">

            <div className="col-md-4">
              <input
                ref={studentNameRef}
                type="text"
                className="form-control"
                placeholder="Enter student name"
              />
            </div>

            <div className="col-md-3">
              <input
                ref={studentGradeRef}
                type="text"
                className="form-control"
                placeholder="Enter grade"
              />
            </div>

            <div className="col-md-3">
              <input
                ref={studentSubjectRef}
                type="text"
                className="form-control"
                placeholder="Enter subject"
              />
            </div>

            <div className="col-md-2">
              {!isUpdate ? (
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleSubmite}
                >
                  Add student
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-warning w-100"
                  onClick={putUserData}
                >
                  Update
                </button>
              )}
            </div>

          </div>
        </form>
      </div>

      <div className="container mt-4">

        <h3 className="text-white mb-3">
          All Students
        </h3>

        {allUser.length === 0 ? (
          <div className="text-center text-white">
            No students found
          </div>
        ) : (
          allUser.map((user) => (
            <div
              key={user.id}
              className="card shadow-sm border-0 rounded-4 mb-3"
            >
              <div className="card-body d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">

                  <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      fontSize: "22px",
                    }}
                  >
                    {user.name
                      ? user.name.charAt(0).toUpperCase()
                      : "U"}
                  </div>

                  <div>
                    <h5 className="mb-1">
                      {user.name}
                    </h5>

                    <p className="text-muted mb-0">
                      Grade: {user.grade}
                    </p>
                  </div>

                </div>

                <div>
                  <span className="badge bg-info text-dark me-3">
                    {user.subject}
                  </span>

                  <button
                    className="btn btn-warning me-2"
                    onClick={() => editUser(user)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeUser(user)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}