# Bug Reports

## Bug 1: Negative limit parameter not validated

**Jira ID:** KAN-1  
**Severity:** Medium  
**Priority:** Medium  

**API:**
GET /products?limit=-1  

**Steps to Reproduce:**
1. Send request with limit = -1
2. Observe response  

**Expected Result:**
API should return error (400 Bad Request)  

**Actual Result:**
API returns successful response  

**Status:**
Open  