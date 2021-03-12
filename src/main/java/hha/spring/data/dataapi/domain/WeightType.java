package hha.spring.data.dataapi.domain;

import javax.persistence.*;

@Entity
@Table(name = "weight_type")
public class WeightType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "weight_type_id")
    private int id;
    @Column(name = "weight_type_name")
    private String name;

    public WeightType() {
    }

    public WeightType(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
