# 🛒 Ecommerce API Testing Project

## 📌 Project Overview

This project demonstrates **API Testing skills** using Postman on a simulated e-commerce application.
It covers real-world QA practices like request validation, authentication testing, and bug reporting.

---

## 🚀 Tools Used

* Postman (API Testing)
* GitHub (Version Control)
* Jira (Bug Tracking)
* VS Code (Project Management)

---

## 📂 Project Structure

```
api-testing-project/
│
├── collection/
│   └── ecommerce.postman_collection.json
│
├── bug-reports/
│   └── bugs.md
│
├── README.md
```

---

## 🧪 APIs Tested

### 🔹 Products APIs

* Get All Products
* Pagination Testing

### 🔹 Authentication APIs

* Login API (FakeStore API)
* Token Handling

---

## ✅ Testing Performed

### ✔ Functional Testing

* Verified API responses
* Checked correct status codes (200, 400, etc.)

### ✔ Validation Testing

* Verified response data structure
* Checked data availability

### ✔ Authentication Testing

* Login with valid credentials
* Tested invalid credentials
* Token-based request handling

### ✔ Negative Testing

* Missing fields
* Invalid inputs
* Edge cases (e.g., negative values)

---

## 🐞 Bug Reporting

Bugs were identified and documented using:

* Jira (for tracking)
* Markdown file (`bug-reports/bugs.md`)

### Example Bug:

* Negative limit parameter not validated

---

## 🔐 Authentication Flow

1. User logs in using credentials
2. API returns authentication token
3. Token is stored using Postman environment
4. Token used in subsequent API requests

---

## 📊 Test Scripts Example

```javascript
pm.test("Status is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Products exist", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.length).to.be.above(0);
});
```

---

## 🧠 Key Learnings

* Understanding of REST APIs
* Working with headers and authentication
* Writing Postman test scripts
* Bug reporting using Jira
* Structuring real-world QA projects
---

## 📈 Future Improvements

* Add more API coverage (Users, Orders)
* Automate tests using Newman
* Integrate CI/CD (GitHub Actions)
* Advanced scripting
---------------------------------------------------------------------------------------------------

