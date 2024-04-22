import { query } from "../../../db/db";
import { Registration } from "../../domain/entidad/Registro";
import { RegistrationRepository } from "../../domain/interfaz/RegistroRepository";

export class MySqlRegistryRepository implements RegistrationRepository {
    async createRegistry(id_venta: number ): Promise<Registration | null> {
    const sql = "INSERT INTO registros (id_venta) VALUES (?)";
    const params: any []= [id_venta];
    try {
        const result: any = await query(sql, params);
        console.log("log2 en el repo sql",result);
        return new Registration(id_venta);
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}