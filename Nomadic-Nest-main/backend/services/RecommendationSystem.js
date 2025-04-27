import Singleton from '../patterns/Singleton.js';
import { RecommendationAdapter, LegacyRecommendation } from '../patterns/Adapter.js';
import PlaceRepository from '../repositories/PlaceRepository.js';

class RecommendationSystem extends Singleton {
    constructor() {
        super();
        this.adapter = new RecommendationAdapter(new LegacyRecommendation());
    }

    takePreferences(price) {
        this.price = price;
        return this;
    }

    generatePlaces() {
        // Use the adapter to convert from legacy system
        const recommendations = this.adapter.generatePlaces(this.price || 300);
    
        // Add to our place repository
        recommendations.forEach(place => {
            PlaceRepository.getInstance().add(place);
        });
    
        return recommendations;
    }
}

export default RecommendationSystem;