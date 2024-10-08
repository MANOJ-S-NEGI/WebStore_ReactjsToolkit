import CategoriesPreviewExtended from "../categories-preview-extended/categories-preview-extended";
import { Route, Routes } from "react-router-dom";
import CategoryExtended from "../category-extended/category-extended.route"
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../redux-store/category/categories.reducer';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments('product-category');
      dispatch(setCategories(categories));
    };

    getCategoriesMap();
  }, [dispatch]);


  return (
    <Routes>
      <Route index element={<CategoriesPreviewExtended />} />
      <Route path=':category' element={<CategoryExtended />} />
    </Routes>
  );
};

export default Shop;
  