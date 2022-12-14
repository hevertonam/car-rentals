import {Router} from 'express';
import multer from 'multer';

import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';
import { importCategoryController } from '../modules/cars/useCases/importCategory';


const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",

});

const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post("/", (request, response) => {
    console.log("Reload Funcionando")
    return createCategoryController.handle(request,response);
  });

  
categoriesRoutes.get("/", (request, response) => {
   return listCategoryController.handle(request,response);
   
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
	return importCategoryController.handle(request, response);
  
});

export {categoriesRoutes};