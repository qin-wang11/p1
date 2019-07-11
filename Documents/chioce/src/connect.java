import javax.xml.transform.Result;
import java.sql.*;

public class connect {
    private static Connection con;

    public static void main(String[] args) throws SQLException {
        connect();
        select();
        sel1();

        con.close();

    }

    public static void connect() {
        try {

            String url = "jdbc:mysql://10.210.28.43:3306/wq";
            String user = "root";
            String password = "123456";
            Class.forName("com.mysql.jdbc.Driver");
            con = DriverManager.getConnection(url, user, password);
            System.out.println("successfully!");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void select() {

        PreparedStatement ps = null;
        try {
            String sql = "select c.c_name ,avg(grade) from choose,course c where c.c_id=choose.c_id group by c.c_id";
            ps = con.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            System.out.println("course" + " " + "average");
            while (rs.next()) {
                String name = rs.getString(1);
                int score = rs.getInt(2);


                System.out.println(name + ":     " + score);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            if (ps != null) {
                try {
                    ps.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }

            }
        }
    }

    public static void sel1() {
        PreparedStatement ps = null;
        try {
            String str = "SELECT s.s_name,course.c_name,sum(grade)as grade from choose,student s,course where s.s_id=choose.s_id and course.c_id = choose.c_id  group by s.s_name order by grade desc";
            ps = con.prepareStatement(str);
            ResultSet rs = ps.executeQuery();
            System.out.println("name"+" "+"course" + " " + "average");
            while (rs.next()) {
                String sname = rs.getString(1);
                String cname = rs.getString(2);
                int sum = rs.getInt(3);


                System.out.println(sname + "     "+cname+"      "+ sum);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

