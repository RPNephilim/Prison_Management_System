package com.rp.imps.model.entity;

import com.rp.imps.model.enums.DevilFruitType;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class DevilFruit {
    private String name;
    private DevilFruitType devilFruitType;
    private String description;
}
