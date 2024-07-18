import { useState } from 'react';

const useForm = (initialFormState) => {
  const [forms, setForms] = useState(initialFormState);

  const handleChange = (index, field, value) => {
    const newForms = [...forms];
    newForms[index][field] = value;
    setForms(newForms);
  };

  const handleSubmit = (callback) => {
    
    return (event) => {
      // event.preventDefault();
      let isValid = true;

      const newForms = forms.map((form) => {
        const errors = {};
        if (!form.fullName) {
          errors.fullName = 'Vui lòng nhập họ tên';
          isValid = false;
        }

        if (!form.gender) {
          errors.gender = 'Vui lòng chọn giới tính';
          isValid = false;
        }

        if (!form.dayOfMonth) {
          errors.dayOfMonth = 'Vui lòng chọn ngày';
          isValid = false;
        }

        if (!form.monthOfYear) {
          errors.monthOfYear = 'Vui lòng chọn tháng';
          isValid = false;
        }

        if (!form.year) {
          errors.year = 'Vui lòng chọn năm';
          isValid = false;
        }
        
        return { ...form, errors };
      });

      setForms(newForms);
      if (isValid) {
        callback(forms);
      }
    };
  };

  const resetForms = (newCount) => {
    setForms(Array.from({ length: newCount }, () => ({
      fullName: '',
      gender: '',
      dayOfMonth: '',
      monthOfYear: '',
      year: '',
      errors: {}
    })));
  };

  const updateForms = (newCount) => {
    if (newCount > forms.length) {
      // Thêm forms mới
      const newForms = [...forms];
      for (let i = forms.length; i < newCount; i++) {
        newForms.push({
          fullName: '',
          gender: '',
          dayOfMonth: '',
          monthOfYear: '',
          year: '',
          errors: {}
        });
      }
      setForms(newForms);
    } else if (newCount < forms.length) {
      // Bớt forms
      setForms(forms.slice(0, newCount));
    }
  };
  
  return {
    forms,
    handleChange,
    handleSubmit,
    resetForms,
    updateForms
  };
};

export default useForm;
